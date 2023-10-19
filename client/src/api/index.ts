/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

import { IRequestOptions, IRequestConfig, getConfigs, axios } from './serviceOptions';
export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class GlobalService {
  /**
   * Sign in into the application
   */
  static login(
    params: {
      /** requestBody */
      body?: LoginDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AccessTokenDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/login';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static logout(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/logout';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static tenants(
    params: {
      /** requestBody */
      body?: CreateTenantDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenants';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an article
   */
  static articles(
    params: {
      /** requestBody */
      body?: CreateArticleDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ArticleDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/articles';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Get all articles
   */
  static articles1(options: IRequestOptions = {}): Promise<ArticleDtoPreview[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/articles';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static comments(
    params: {
      /** requestBody */
      body?: CreateCommentDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/comments';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static images(
    params: {
      /**  */
      image: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UploadImageDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/images';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['image']) {
        if (Object.prototype.toString.call(params['image']) === '[object Array]') {
          for (const item of params['image']) {
            data.append('image', item as any);
          }
        } else {
          data.append('image', params['image'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class TenantsService {
  /**
   *
   */
  static tenants(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenants/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class ArticlesService {
  /**
   * Get an article by ID
   */
  static articles(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ArticleDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/articles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static articles1(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateArticleDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/articles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static articles2(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/articles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ImagesService {
  /**
   *
   */
  static images(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/images/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static images1(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/images/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export interface LoginDto {
  /**  */
  username?: string;

  /**  */
  password?: string;
}

export interface AccessTokenDto {
  /**  */
  access_token?: string;

  /** token expiration in seconds */
  expires_in?: number;

  /**  */
  token_type?: string;
}

export interface CreateTenantDto {}

export interface CreateArticleDto {
  /**  */
  title?: string;

  /**  */
  perex?: string;

  /**  */
  content?: string;

  /** The unique identifier of the article image, actual image hosted on third party */
  imageId?: string;
}

export interface ArticleDto {
  /**  */
  articleId?: string;

  /**  */
  title?: string;

  /**  */
  perex?: string;

  /** The unique identifier of the article image, actual image hosted on third party */
  imageId?: string;

  /**  */
  createdAt?: Date;

  /**  */
  lastUpdatedAt?: Date;

  /**  */
  content?: string;
}

export interface ArticleDtoPreview {
  /**  */
  articleId?: string;

  /**  */
  title?: string;

  /**  */
  perex?: string;

  /** The unique identifier of the article image, actual image hosted on third party */
  imageId?: string;

  /**  */
  createdAt?: Date;

  /**  */
  lastUpdatedAt?: Date;
}

export interface UpdateArticleDto {}

export interface CreateCommentDto {}

export interface UploadImageDto {
  /**  */
  imageId?: string;

  /**  */
  name?: string;
}
