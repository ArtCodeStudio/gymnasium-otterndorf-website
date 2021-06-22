import { Injectable } from '@nestjs/common';
import nodeFetch, { RequestInit, Response, Headers } from 'node-fetch';
import * as cheerio from 'cheerio';
import { URL } from 'url';
import * as FormData from 'form-data';

import * as tough from 'tough-cookie';
import { url } from 'inspector';

const cookieJar = new tough.CookieJar();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('fetch-cookie/node-fetch')(
  nodeFetch,
  cookieJar,
  false, //  doesn't ignore errors, throws when an error occurs in setting cookies and breaks the request and execution
);

@Injectable()
export class MensaMaxService {
  async getLoginData(url: URL) {
    const options: RequestInit = {
      method: 'GET',
      // redirect: 'follow',
      // body: form,
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'de-DE,en-US;q=0.7,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/html',
        TE: 'Trailers',
        Connection: 'keep-alive',
        'User-Agent':
          'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0',
        // IE 11
        // 'User-Agent':
        //   'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
      },
    };

    let html = '';
    let response: Response;
    let headers: Headers;

    try {
      response = await fetch(url.toString(), options);
      html = await response.text();
      headers = response.headers;
    } catch (error) {
      console.error(error);
      throw error;
    }

    const $ = cheerio.load(html);

    const $form = $('form');
    const action = $form.attr('action');
    const method = $form.attr('method');
    const $inputs = $('input', $form);

    // if (action.startsWith('./')) {
    //   action = action.substr(1);
    // }

    const formData: { name: string; value: string }[] = [];
    for (const input of $inputs) {
      const $input = $(input);
      const name = $input.attr('name');
      const value = $input.attr('value');
      formData.push({
        name,
        value,
      });
    }
    return {
      html: $.root().html(),
      method,
      action,
      formData,
      headers,
    };
  }

  async login() {
    const loginFormUrl = new URL(
      'https://login.mensaonline.de/LOGINPLAN.ASPX?P=CUX000&E=SZO',
    );
    const loginData = await this.getLoginData(loginFormUrl);

    const submitUrl = new URL(loginData.action, loginFormUrl.toString());

    const form = new FormData();
    for (const input of loginData.formData) {
      form.append(input.name, input.value);
    }

    const options: RequestInit = {
      method: loginData.method,
      // redirect: 'follow',
      body: form,
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'de-DE,en-US;q=0.7,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/x-www-form-urlencoded',
        TE: 'Trailers',
        Connection: 'keep-alive',
        Origin: 'https://login.mensaonline.de',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0',
        Host: submitUrl.host,
        // IE 11
        // 'User-Agent':
        //   'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
      },
    };

    let html = '';

    try {
      const response = await fetch(submitUrl.toString(), options);
      html = await response.text();

      console.debug('status', response.status); // We should get 302 here like in the browser

      console.debug('formData', loginData.formData);
      console.debug('login headers', loginData.headers.raw());
      console.debug('headers', response.headers.raw());
      console.debug('redirected', response.redirected);
      console.debug('url', response.url);
      console.debug('cookies', cookieJar.toJSON().cookies);
    } catch (error) {
      console.error(error);
      throw error;
    }

    return html;
  }
}
