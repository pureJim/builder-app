declare namespace API {
  interface IRestModal<T> {
    code: number;
    msg: string;
    data: T;
  }

  interface IRestInfo {
    code: number;
    msg: string;
  }

  interface IPaging {
    cur_page: number;
    item_total: number;
    page_size: number;
    page_total: number;
  }

  interface ITableParams {
    page: number;
    page_size: number;
  }

  interface IError {
    response: {
      data: {
        code: number;
        msg: string;
      };
    };
  }

  interface IBlobError {
    response: {
      data: Blob;
    };
  }
}
