/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
const remark = require('remark');
const strip = require('strip-markdown');

@Injectable()
export class MarkdownService {
  public async strip(md: string) {
    const file = await remark().use(strip).process(md);
    return file.toString() as string;
  }
}
