import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './manager.controller';
import { ManagerService } from './manager.service';
import { RedbirdModule } from './redbird/redbird.module';
import { Pm2Module } from './pm2/pm2.module';
import { ConfigModule, registerAs } from '@nestjs/config';
import { loadConfig } from './helper/config';

@Module({
  imports: [Pm2Module],
  controllers: [AppController],
  providers: [ManagerService],
})
export class ManagerModule {
  // constructor() {}
  static forRoot(): DynamicModule {
    const { redbird, apps, manager } = loadConfig();
    return {
      imports: [
        ConfigModule.forRoot({
          load: [
            registerAs('redbird', () => redbird),
            registerAs('apps', () => apps),
            registerAs('manager', () => manager),
          ],
        }),
        RedbirdModule.forRoot(redbird),
      ],
      module: ManagerModule,
      providers: [],
      controllers: [],
      exports: [],
    };
  }
}
