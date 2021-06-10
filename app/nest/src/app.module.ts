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
  ],
})
export class AppModule {
  /**/
}
