import { Injectable } from '@nestjs/common';
import { Builder, By, until } from 'selenium-webdriver';
import * as firefox from 'selenium-webdriver/firefox';

import { minify } from 'html-minifier';

require('geckodriver');

@Injectable()
export class MensaMaxService {
  async getMensaTable() {
    const options = new firefox.Options();
    options.headless();

    const driver = await new Builder()
      .setFirefoxOptions(options)
      .forBrowser('firefox')
      .build();
    try {
      await driver.get(
        'https://login.mensaonline.de/LOGINPLAN.ASPX?P=CUX000&E=SZO',
      );
      const outerTableLocator = By.className('Outertable');
      await driver.wait(until.elementsLocated(outerTableLocator), 5000);
      const outerTableEl = await driver.findElement(outerTableLocator);
      const html = await outerTableEl.getAttribute('outerHTML');
      // const html = await driver.getPageSource();
      return minify(html, {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyElements: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true,
      });
    } finally {
      await driver.quit();
    }
  }
}
