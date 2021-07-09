import {
  Controller,
  Get,
  Res,
  Param,
  UseInterceptors,
  CacheInterceptor,
  CacheTTL,
} from '@nestjs/common';
import { Response } from 'express';
import { MensaMaxService } from './mensa-max.service';
import { ApiParam, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('mensa-max')
@Controller('api/mensa-max/:p/:e')
@UseInterceptors(CacheInterceptor)
export class MensaMaxController {
  constructor(readonly mensaMax: MensaMaxService) {}

  @ApiParam({
    name: 'p',
    description:
      'The "P" query parameter for the original MensaMax URL, e.g. "CUX000"',
    type: String,
  })
  @ApiParam({
    name: 'e',
    description:
      'The "E" query parameter for the original MensaMax URL, e.g. "SZO"',
    type: String,
  })
  @Get()
  @ApiOperation({
    summary:
      'Get the dishes of the current week, e.g. "/api/mensa-max/CUX000/SZO"',
  })
  @CacheTTL(86400) // 24h
  async get(
    @Res() res: Response,
    @Param('p') p: string,
    @Param('e') e: string,
  ) {
    const result = await this.mensaMax.getData(p, e);
    res.json(result);
  }
}
