import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { appConfig, theme } from './config/config';
import { ThemeModule } from '@ribajs/nest-theme';
import { FlexsearchModule } from './flexsearch/flexsearch.module';
import { SearchService } from './search/search.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    ThemeModule.forRoot(theme),
    FlexsearchModule,
  ],
  controllers: [],
  providers: [ConfigService, SearchService],
})
export class AppModule {}
