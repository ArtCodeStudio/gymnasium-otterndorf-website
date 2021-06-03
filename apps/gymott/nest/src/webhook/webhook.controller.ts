import { Controller, Response, Post, Body, Res } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { StrapiWebhookData } from './types';

@Controller('webhook')
export class WebhookController {
  constructor(protected readonly webhook: WebhookService) {
    //
  }

  @Post('strapi')
  async post(@Res() res: Response, @Body() body: StrapiWebhookData) {
    this.webhook.onWebhhook(body);
    res.json();
  }
}
