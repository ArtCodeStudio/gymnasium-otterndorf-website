import { Controller, Get, Res, Header } from '@nestjs/common';
import { Response } from 'express';
import { FeedService } from './feed.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('feed')
@Controller('api/feed')
export class FeedController {
  constructor(protected feed: FeedService) {}

  @Get('podcast')
  @ApiOperation({ summary: 'Get the podcast feed' })
  @Header('Content-Type', 'application/rss+xml')
  async podcast(@Res() res: Response) {
    try {
      const feed = await this.feed.getPodcast();
      return res.send(feed.buildXml());
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get('rss')
  @ApiOperation({ summary: 'Get the RSS 2.0 feed' })
  @Header('Content-Type', 'application/rss+xml')
  async rss(@Res() res: Response) {
    const feed = await this.feed.get();
    return res.send(feed.rss2());
  }

  @Get('json')
  @ApiOperation({ summary: 'Get the JSON Feed 1.0' })
  @Header('Content-Type', 'application/feed+json')
  async json(@Res() res: Response) {
    const feed = await this.feed.get();
    return res.send(feed.json1());
  }

  @Get('atom')
  @ApiOperation({ summary: 'Get the Atom 1.0 feed' })
  @Header('Content-Type', 'application/atom+xml')
  async atom(@Res() res: Response) {
    const feed = await this.feed.get();
    return res.send(feed.atom1());
  }
}
