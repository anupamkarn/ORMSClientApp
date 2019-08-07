import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  GetUsers(){
    var customers = this.http.get(this.baseUrl);
    // alert (customers)
    // console.log(customers);
    return customers;
  }
  UpdateCustomer(customerid,status){
    var  s = this.http.put(this.baseUrl+'/'+customerid+'?status='+status,"");
    if(s==null){
      return null;
    }
    else{
      return s;
    }
  }
  baseUrl = "http://localhost:52865/api/AdminUserTables"
}
