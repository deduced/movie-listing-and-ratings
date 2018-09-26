<<<<<<< HEAD
// flow-typed signature: b371e1002f7439f9f053dc08186c5375
// flow-typed version: dbaff82b4f/axios_v0.16.x/flow_>=v0.28.x

declare module 'axios' {
=======
// flow-typed signature: 2f4a4a9bfbd91d3ada3713b1ea464376
// flow-typed version: e67d002d9c/axios_v0.16.x/flow_>=v0.25.x <=v0.74.x

declare module "axios" {
>>>>>>> v3-10
  declare interface ProxyConfig {
    host: string;
    port: number;
  }
  declare interface Cancel {
    constructor(message?: string): Cancel;
    message: string;
  }
  declare interface Canceler {
    (message?: string): void;
  }
  declare interface CancelTokenSource {
    token: CancelToken;
    cancel: Canceler;
  }
<<<<<<< HEAD
  declare interface CancelToken {
=======
  declare class CancelToken {
>>>>>>> v3-10
    constructor(executor: (cancel: Canceler) => void): CancelToken;
    static source(): CancelTokenSource;
    promise: Promise<Cancel>;
    reason?: Cancel;
    throwIfRequested(): void;
  }
  declare interface AxiosXHRConfigBase<T> {
    adapter?: <T>(config: AxiosXHRConfig<T>) => Promise<AxiosXHR<T>>;
    auth?: {
      username: string,
      password: string
    };
<<<<<<< HEAD
    baseURL?: string,
=======
    baseURL?: string;
>>>>>>> v3-10
    cancelToken?: CancelToken;
    headers?: Object;
    httpAgent?: mixed; // Missing the type in the core flow node libdef
    httpsAgent?: mixed; // Missing the type in the core flow node libdef
    maxContentLength?: number;
<<<<<<< HEAD
    maxRedirects?: 5,
    params?: Object;
    paramsSerializer?: (params: Object) => string;
    progress?: (progressEvent: Event) => void | mixed;
    proxy?: ProxyConfig;
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
    timeout?: number;
    transformRequest?: Array<<U>(data: T) => U|Array<<U>(data: T) => U>>;
    transformResponse?: Array<<U>(data: T) => U>;
    validateStatus?: (status: number) => boolean,
=======
    maxRedirects?: number;
    params?: Object;
    paramsSerializer?: (params: Object) => string;
    onUploadProgress?: (progressEvent: ProgressEvent) => void;
    onDownloadProgress?: (progressEvent: ProgressEvent) => void;
    proxy?: ProxyConfig | false;
    responseType?:
      | "arraybuffer"
      | "blob"
      | "document"
      | "json"
      | "text"
      | "stream";
    timeout?: number;
    transformRequest?: Array<<U>(data: T) => U | Array<<U>(data: T) => U>>;
    transformResponse?: Array<<U>(data: T) => U>;
    validateStatus?: (status: number) => boolean;
>>>>>>> v3-10
    withCredentials?: boolean;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
  }
  declare type $AxiosXHRConfigBase<T> = AxiosXHRConfigBase<T>;
  declare interface AxiosXHRConfig<T> extends AxiosXHRConfigBase<T> {
    data?: T;
    method?: string;
    url: string;
  }
  declare type $AxiosXHRConfig<T> = AxiosXHRConfig<T>;
  declare class AxiosXHR<T> {
    config: AxiosXHRConfig<T>;
    data: T;
<<<<<<< HEAD
    headers: Object;
    status: number;
    statusText: string,
    request: http$ClientRequest | XMLHttpRequest
  }
  declare type $AxiosXHR<T> = $AxiosXHR<T>;
  declare class AxiosInterceptorIdent extends String {}
  declare class AxiosRequestInterceptor<T> {
    use(
      successHandler: ?(response: AxiosXHRConfig<T>) => Promise<AxiosXHRConfig<*>> | AxiosXHRConfig<*>,
      errorHandler: ?(error: mixed) => mixed,
=======
    headers?: Object;
    status: number;
    statusText: string;
    request: http$ClientRequest | XMLHttpRequest;
  }
  declare type $AxiosXHR<T> = AxiosXHR<T>;
  declare type AxiosInterceptorIdent = number;
  declare class AxiosRequestInterceptor<T> {
    use(
      successHandler: ?(
        response: AxiosXHRConfig<T>
      ) => Promise<AxiosXHRConfig<*>> | AxiosXHRConfig<*>,
      errorHandler: ?(error: mixed) => mixed
>>>>>>> v3-10
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class AxiosResponseInterceptor<T> {
    use(
      successHandler: ?(response: AxiosXHR<T>) => mixed,
<<<<<<< HEAD
      errorHandler: ?(error: mixed) => mixed,
=======
      errorHandler: ?(error: $AxiosError<any>) => mixed
>>>>>>> v3-10
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare type AxiosPromise<T> = Promise<AxiosXHR<T>>;
  declare class Axios {
    constructor<T>(config?: AxiosXHRConfigBase<T>): void;
<<<<<<< HEAD
    $call: <T>(config: AxiosXHRConfig<T> | string, config?: AxiosXHRConfig<T>) => AxiosPromise<T>;
=======
    $call: <T>(
      config: AxiosXHRConfig<T> | string,
      config?: AxiosXHRConfig<T>
    ) => AxiosPromise<T>;
>>>>>>> v3-10
    request<T>(config: AxiosXHRConfig<T>): AxiosPromise<T>;
    delete<T>(url: string, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    get<T>(url: string, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    head<T>(url: string, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
<<<<<<< HEAD
    post<T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    put<T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    patch<T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    interceptors: {
      request: AxiosRequestInterceptor<mixed>,
      response: AxiosResponseInterceptor<mixed>,
    };
    defaults: AxiosXHRConfig<*> & { headers: Object };
=======
    post<T>(
      url: string,
      data?: mixed,
      config?: AxiosXHRConfigBase<T>
    ): AxiosPromise<T>;
    put<T>(
      url: string,
      data?: mixed,
      config?: AxiosXHRConfigBase<T>
    ): AxiosPromise<T>;
    patch<T>(
      url: string,
      data?: mixed,
      config?: AxiosXHRConfigBase<T>
    ): AxiosPromise<T>;
    interceptors: {
      request: AxiosRequestInterceptor<mixed>,
      response: AxiosResponseInterceptor<mixed>
    };
    defaults: { headers: Object } & AxiosXHRConfig<*>;
>>>>>>> v3-10
  }

  declare class AxiosError<T> extends Error {
    config: AxiosXHRConfig<T>;
    response: AxiosXHR<T>;
    code?: string;
  }

  declare type $AxiosError<T> = AxiosError<T>;

  declare interface AxiosExport extends Axios {
    Axios: typeof Axios;
    Cancel: Class<Cancel>;
    CancelToken: Class<CancelToken>;
    isCancel(value: any): boolean;
    create(config?: AxiosXHRConfigBase<any>): Axios;
    all: typeof Promise.all;
<<<<<<< HEAD
    spread(callback: Function): (arr: Array<any>) => Function
=======
    spread(callback: Function): (arr: Array<any>) => Function;
>>>>>>> v3-10
  }
  declare module.exports: AxiosExport;
}
