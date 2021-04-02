import type { Namespace, RefKeys } from './types';
export const NAMESPACES: Namespace[] = ['blog', 'nav', 'page', 'post'];
export const REF_KEYS: RefKeys = {
  blog: 'slug',
  nav: 'id',
  page: 'slug',
  post: 'slug',
};
