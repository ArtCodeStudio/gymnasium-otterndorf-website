import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const _FlexSearch = require('flexsearch');
import type TypeFlexSearch from 'flexsearch';
import type { CreateOptions, Indices } from './types';

const FlexSearch = _FlexSearch as typeof TypeFlexSearch;

@Injectable()
export class FlexSearchService {
  protected indices: Indices = {};
  /**
   * Add global matchers for all instances.
   *
   * @static
   * @memberof FlexSearchService
   * @see https://github.com/nextapps-de/flexsearch/#flexsearch.addmatcher
   */
  static registerMatcher = FlexSearch.registerMatcher;

  /**
   * Global encoders can be shared/used by all instances.
   *
   * @static
   * @memberof FlexSearchService
   */
  static registerEncoder = FlexSearch.registerEncoder;

  /**
   * Assign stemmer/filters globally to a language
   *
   * @static
   * @memberof FlexSearchService
   */
  static registerLanguage = FlexSearch.registerLanguage;

  /**
   * Call a global encoder directly.
   *
   * @static
   * @memberof FlexSearchService
   * @see https://github.com/nextapps-de/flexsearch/#register-a-global-encoder
   */
  static encode = FlexSearch.encode;

  /**
   * Create a new index
   *
   * @template T
   * @param {string} namespace
   * @param {CreateOptions} [options]
   * @returns
   * @memberof FlexSearchService
   * @see https://github.com/nextapps-de/flexsearch/#flexsearch.create
   */
  create<T = unknown>(namespace: string, options?: CreateOptions) {
    if (this.indices[namespace]) {
      return this.indices[namespace];
    }
    const index = FlexSearch.create<T>(options);
    this.indices[namespace] = index;
    return this.indices[namespace];
  }

  /**
   * Get an existing index.
   *
   * @param {string} namespace
   * @returns
   * @memberof FlexSearchService
   */
  get(namespace: string) {
    return this.indices[namespace];
  }
}
