import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';
import { CalendarService } from './calendar.service';
import { ApiQuery, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('calendar')
@Controller('api/calendar')
export class CalendarController {
  constructor(protected calendar: CalendarService) {}

  @ApiQuery({
    name: 'key',
    description:
      'The calendar key, if no key is specified, the default public calendar is used.',
    required: false,
    type: String,
  })
  @Get()
  @ApiOperation({ summary: 'Get the next calendar entries' })
  async get(@Res() res: Response, @Query('key') key?: string) {
    const events = await this.calendar.get(key);
    res.json(events);
  }
}
