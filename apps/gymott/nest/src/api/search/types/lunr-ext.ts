import type { Plugin } from '@ribajs/nest-lunr';
import type lunr from 'lunr';

interface ILunrExt {
  de: Plugin;
}

export type LunrExt = typeof lunr & ILunrExt;
