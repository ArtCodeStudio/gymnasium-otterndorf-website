import { Controller, Get, Res, Param } from '@nestjs/common';
import { Response } from 'express';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PodloveService } from './podlove.service';

@ApiTags('podlove')
@Controller('api/podlove')
export class PodloveController {
  constructor(protected readonly podlove: PodloveService) {}

  @Get('config')
  @ApiOperation({ summary: 'Get the config object for the Podlove Web Player' })
  async podcast(@Res() res: Response) {
    const config = await this.podlove.getConfig();
    return res.json(config);
  }

  @Get('episode/:slug')
  @ApiOperation({
    summary: 'Get a specific episode object for the Podlove Web Player',
  })
  @ApiParam({
    name: 'slug',
    description: 'The slug of the blog post with the podcast episode',
  })
  async episode(@Res() res: Response, @Param('slug') slug: string) {
    const episode = await this.podlove.getEpisode(slug);
    return res.json(episode);
  }
}
