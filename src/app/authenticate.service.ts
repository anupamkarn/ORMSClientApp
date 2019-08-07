import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginInfo, LoginStatus} from './model/loginInfo';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http:HttpClient) { }

  Authenticate(ld:LoginInfo) {
    var ls = this.http.post(this.baseURL,ld);
    return ls;
  }
  baseURL = "http://localhost:52865/api/AuthenticationTables";
}
