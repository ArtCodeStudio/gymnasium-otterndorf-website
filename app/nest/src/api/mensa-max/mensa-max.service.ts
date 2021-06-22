import { Injectable } from '@nestjs/common';
import { Builder, By, until } from 'selenium-webdriver';
import * as firefox from 'selenium-webdriver/firefox';

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
      return await outerTableEl.getAttribute('outerHTML');
      // return driver.getPageSource();
    } finally {
      await driver.quit();
    }
  }
}
