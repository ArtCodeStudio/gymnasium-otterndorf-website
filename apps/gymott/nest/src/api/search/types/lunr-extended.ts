import type { Plugin } from '@ribajs/nest-lunr';
import type lunr from 'lunr';

interface ILunrExtended {
  de: Plugin;
}

export type LunrExtended = typeof lunr & ILunrExtended;
