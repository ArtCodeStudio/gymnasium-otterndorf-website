import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { appConfig, theme } from './config/config';
import { ThemeModule } from '@ribajs/nest-theme';
import { FlexsearchModule } from './flexsearch/flexsearch.module';
import { StrapiService } from './strapi/strapi.service';
import { SearchService } from './api/search/search.service';
import { CalendarController } from './api/calendar/calendar.controller';
import { CalendarService } from './api/calendar/calendar.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    ThemeModule.forRoot(theme),
    FlexsearchModule,
  ],
  controllers: [CalendarController],
  providers: [ConfigService, StrapiService, SearchService, CalendarService],
})
export class AppModule {}
