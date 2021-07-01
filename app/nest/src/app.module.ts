import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { appConfig, theme } from './config/config';
import { ThemeModule } from '@ribajs/nest-theme';
import {
  LunrModule,
  SearchController,
  SuggestController,
} from '@ribajs/nest-lunr';
import { StrapiService } from './api/strapi/strapi.service';
import { SearchService } from './api/search/search.service';
import { CalendarController } from './api/calendar/calendar.controller';
import { CalendarService } from './api/calendar/calendar.service';
import { NavService } from './api/nav/nav.service';
import { PageService } from './api/page/page.service';
import { PostService } from './api/post/post.service';
import { SchoolSubjectService } from './api/school-subject/school-subject.service';
import { TeacherService } from './api/teacher/teacher.service';
import { MarkdownService } from './api/markdown/markdown.service';
import { WebhookService } from './webhook/webhook.service';
import { WebhookController } from './webhook/webhook.controller';
import { MensaMaxController } from './api/mensa-max/mensa-max.controller';
import { MensaMaxService } from './api/mensa-max/mensa-max.service';
import { FeedController } from './api/feed/feed.controller';
import { FeedService } from './api/feed/feed.service';
import { PodloveController } from './api/podlove/podlove.controller';
import { PodloveService } from './api/podlove/podlove.service';
import { PodcastService } from './api/podcast/podcast.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    LunrModule,
    ThemeModule.forRoot(theme),
  ],
  controllers: [
    CalendarController,
    SearchController,
    SuggestController,
    WebhookController,
    MensaMaxController,
    FeedController,
    PodloveController,
  ],
  providers: [
    ConfigService,
    StrapiService,
    SearchService,
    CalendarService,
    NavService,
    PageService,
    PostService,
    SchoolSubjectService,
    TeacherService,
    MarkdownService,
    WebhookService,
    MensaMaxService,
    FeedService,
    PodloveService,
    PodcastService,
  ],
})
export class AppModule {
  /**/
}
