import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
/**
 * Created by Administrator on 2017/5/28.
 */
@Injectable()
export class HttpService {
  constructor(private http: Http) {
  }

  post(url: string, body: any, resolve?: (value: any) => void, failed?: (error: string) => void) {
    this.http.post(url, body).subscribe(data => {
      if (data.json().status === 'failed') {
        failed(data.json().result);
      } else {
        resolve(data.json().result);
      }
    }, error => {
      console.error(error);
    });
  }
}
