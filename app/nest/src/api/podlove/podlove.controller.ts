import { Controller, Get, Res, Param, Query } from '@nestjs/common';
import { Response } from 'express';
import { ApiOperation, ApiParam, ApiTags, ApiQuery } from '@nestjs/swagger';
import { PodloveService } from './podlove.service';
import type { PodloveWebPlayerTab } from '@ribajs/podcast';

@ApiTags('podlove')
@Controller('api/podlove')
export class PodloveController {
  constructor(protected readonly podlove: PodloveService) {}

  @ApiOperation({
    summary:
      'Get the config object for the Podlove Web Player for the latest episode',
  })
  @ApiQuery({
    name: 'activeTab',
    description: 'The tab which should be active in the player',
    required: false,
    type: String,
  })
  @Get('config')
  async podloveConfig(
    @Res() res: Response,
    @Query('activeTab') activeTab?: PodloveWebPlayerTab,
  ) {
    const config = await this.podlove.getConfig(undefined, {
      activeTab,
    });
    return res.json(config);
  }

  @ApiOperation({
    summary:
      'Get the config object for the Podlove Web Player for a specific episode',
  })
  @ApiParam({
    name: 'episodeSlug',
    description: 'The slug of the podcast episode',
  })
  @ApiQuery({
    name: 'activeTab',
    description: 'The tab which should be active in the player',
    required: false,
    type: String,
  })
  @Get('config/:episodeSlug')
  async podloveConfigForEpisode(
    @Res() res: Response,
    @Param('episodeSlug') episodeSlug: string,
    @Query('activeTab') activeTab?: PodloveWebPlayerTab,
  ) {
    const config = await this.podlove.getConfig(episodeSlug, {
      activeTab,
    });
    return res.json(config);
  }

  @ApiOperation({
    summary: 'Get a latest episode object for the Podlove Web Player',
  })
  @Get('episode')
  async latestEpisode(@Res() res: Response) {
    const episode = await this.podlove.getLatestEpisode();
    return res.json(episode);
  }

  @ApiOperation({
    summary: 'Get a specific episode object for the Podlove Web Player',
  })
  @ApiParam({
    name: 'slug',
    description: 'The slug of the podcast episode',
  })
  @Get('episode/:slug')
  async episode(@Res() res: Response, @Param('slug') slug: string) {
    const episode = await this.podlove.getEpisode(slug);
    return res.json(episode);
  }
}
