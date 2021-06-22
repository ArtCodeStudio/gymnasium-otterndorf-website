import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';
import { MensaMaxService } from './mensa-max.service';
import { ApiQuery, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('mensa-max')
@Controller('api/mensa-max')
export class MensaMaxController {
  constructor(readonly mensaMax: MensaMaxService) {}

  @ApiQuery({
    name: 'key',
    description:
      'The calendar key, if no key is specified, the default public calendar is used.',
    required: false,
    type: String,
  })
  @Get()
  @ApiOperation({ summary: 'Get the dishes of the current week' })
  async get(@Res() res: Response) {
    const html = await this.mensaMax.getMensaTable();
    res.json({ html });
  }
}
