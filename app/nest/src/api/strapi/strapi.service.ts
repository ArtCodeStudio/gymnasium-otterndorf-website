import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { theme } from '../../config/config';
import { AppConfig } from '../../types';
import { GraphQLClient } from '@ribajs/node-graphql-client';
import { resolve } from 'path';
import { parseFile as parseAudioFile, IOptions } from 'music-metadata';

@Injectable()
export class StrapiService {
  protected _graphql: GraphQLClient;
  protected _appConfig: AppConfig;

  protected _strapiLocalPublicPath: string;

  public get graphql() {
    return this._graphql;
  }

  constructor(protected readonly config: ConfigService) {
    this._appConfig = this.config.get<AppConfig>('app');
    this._strapiLocalPublicPath = resolve(
      this._appConfig.root,
      '..',
      'strapi/public',
    );
    const url = process.env.STRAPI_INTERN_URL + '/graphql';
    this._graphql = new GraphQLClient(url, {}, theme.themeDir);
  }

  public getUploadFileLocalPath(filename: string) {
    return resolve(this._strapiLocalPublicPath, 'uploads', filename);
  }

  /**
   * Get audio metadata object
   * @param filename
   * @returns Seconds
   */
  public async getAudioMetadata(filename: string, options: IOptions = {}) {
    const path = this.getUploadFileLocalPath(filename);
    console.debug('getAudioDurationInSeconds', path);
    return await parseAudioFile(path, options);
  }

  /**
   * Seconds to ISO 8601 Duration format ([hh]:[mm]:[ss].[sss])
   * @credits https://stackoverflow.com/a/6313008
   * @param timeInSeconds
   * @returns
   */
  public secondsToTime(timeInSeconds: number | string) {
    const sec_num = parseInt(timeInSeconds.toString(), 10);
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor((sec_num - hours * 3600) / 60);
    const seconds = sec_num - hours * 3600 - minutes * 60;

    const h = hours < 10 ? '0' + hours : hours.toString();
    const m = minutes < 10 ? '0' + minutes : minutes.toString();
    const s = seconds < 10 ? '0' + seconds : seconds.toString();

    return `${h}:${m}:${s}`;
  }
}
