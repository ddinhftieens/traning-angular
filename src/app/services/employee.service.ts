import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeadersUtil } from '../util/headers-util';
import { ParamUtil } from '../util/param-util';
import { ApiUrlUtil } from '../util/api-url-util';
import { environment } from 'src/environments/environment';
import { RequestParam } from '../util/request-param';
import {Cookie} from 'ng2-cookies';

@Injectable()
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  getTilte() {
    return "Hello world"
  }

  getData(search: any): Observable<any> {
    const headers: HttpHeaders = HeadersUtil.getHeaders();
    const params: RequestParam[] = ParamUtil.toRequestParams(search);
    const url = ApiUrlUtil.buildQueryString("https://dummyjson.com/users", params);
    return this.http.get<any>(url, { headers: headers });
  }

  login(loginRequest: any): Observable<any> {
    const headers: HttpHeaders = HeadersUtil.getHeaders();
    // const params: RequestParam[] = ParamUtil.toRequestParams(search);
    const url = "http://localhost:8080/login"
    return this.http.post<any>(url,loginRequest, { headers: headers });
  }
}
