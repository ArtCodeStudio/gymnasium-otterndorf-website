import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fetch from 'node-fetch';

@Controller('calendar')
export class CalendarController {
  @Get()
  async get(@Res() res: Response) {
    // TODO move to service
    const data = await fetch(
      'https://gymott.net/iserv/public/calendar?key=049a7daf00db139b3c3e5df3e58ba5d3',
    );
    const text = await data.text();
    return res.send(text);
  }
}
