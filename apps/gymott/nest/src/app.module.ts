import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { appConfig, theme } from './config/config';
import { ThemeModule } from '@ribajs/nest-theme';
import { FlexsearchModule } from './flexsearch/flexsearch.module';
import { StrapiService } from './strapi/strapi.service';
import { SearchService } from './search/search.service';
import { NavigationService } from './navigation/navigation.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    ThemeModule.forRoot(theme),
    FlexsearchModule,
  ],
  controllers: [],
  providers: [ConfigService, StrapiService, SearchService, NavigationService],
})
export class AppModule {}
