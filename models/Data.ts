export interface APIResponsePagination<T> {
  message: string;
  statusCode: number;
  data: DataList<T>;
}

export interface APIResponseDetail<T> {
  message: string;
  statusCode: number;
  data: T;
}

export interface DataList<T> {
  data: T[];
  meta: Meta;
}

export interface Meta {
  total: number;
  last_page: number;
  current_page: number;
  per_page: number;
  prev_page: null;
  next_page: null;
}
