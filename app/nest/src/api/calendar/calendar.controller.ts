import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';
import { CalendarService } from './calendar.service';

@Controller('api/calendar')
export class CalendarController {
  constructor(protected calendar: CalendarService) {}

  @Get()
  async get(@Res() res: Response, @Query('key') key: string) {
    const events = await this.calendar.get(key);
    res.json(events);
  }
}
