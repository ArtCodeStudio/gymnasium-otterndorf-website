import { Controller, Response, Post, Body, Res } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { StrapiWebhookData } from './types';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('webhook')
export class WebhookController {
  constructor(protected readonly webhook: WebhookService) {
    //
  }

  /**
   * API Endpoint for strapi webhooks.
   * This must be setup in Strapi: Settings -> Global Settings -> Webhooks.
   * The Webhook URL must be https://your-domain.org/webhook/strapi
   * @param res 
   * @param body 
   */
  @ApiExcludeEndpoint()
  @Post('strapi')
  async post(@Res() res: Response, @Body() body: StrapiWebhookData) {
    this.webhook.onWebhook(body);
    res.json();
  }
}
