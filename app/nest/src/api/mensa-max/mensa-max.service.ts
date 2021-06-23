import { Injectable } from '@nestjs/common';
import { Builder, By, until } from 'selenium-webdriver';
import * as firefox from 'selenium-webdriver/firefox';

import { minify as minifier } from 'html-minifier';
import cheerio from 'cheerio';

require('geckodriver');

@Injectable()
export class MensaMaxService {
  async getMensaTable(url: string, minify = false) {
    const options = new firefox.Options();
    options.headless();

    const driver = await new Builder()
      .setFirefoxOptions(options)
      .forBrowser('firefox')
      .build();
    try {
      await driver.get(url);
      const outerTableLocator = By.className('Outertable');
      await driver.wait(until.elementsLocated(outerTableLocator), 5000);
      const outerTableEl = await driver.findElement(outerTableLocator);
      const html = await outerTableEl.getAttribute('outerHTML');
      // const html = await driver.getPageSource();
      if (minify) {
        return minifier(html, {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyElements: false,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeTagWhitespace: true,
        });
      } else {
        return html;
      }
    } finally {
      await driver.quit();
    }
  }

  async getData(p: string, e: string) {
    const url = `https://login.mensaonline.de/LOGINPLAN.ASPX?P=${p}&E=${e}`;
    const html = await this.getMensaTable(url, true);
    const $dom = cheerio.load(html);

    const timeRange = $dom('#lblWoche').text();

    const $mainTable = $dom('#tblMain');

    const $header = $dom('.tdHeader > th', $mainTable);

    const header: string[] = [];
    const foods: string[][] = [[], []];

    for (const head of $header) {
      header.push($dom(head).text());
    }

    const $foodsRow1 = $dom('.tdFooter2 > td', $mainTable);
    const $foodsRow2 = $dom('.tdFooter > td', $mainTable);

    for (const food of $foodsRow1) {
      foods[0].push($dom(food).html());
    }

    for (const food of $foodsRow2) {
      foods[1].push($dom(food).html());
    }

    return {
      url,
      html,
      timeRange,
      header,
      foods,
    };
  }
}
