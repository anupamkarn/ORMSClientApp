import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllProdustsOfCustomerService {

  constructor(public http:HttpClient) { }

  NumberOfProducts(CustomerID){
    var number = this.http.get(this.baseURl + '/' + this.n + '/' + CustomerID);
    return number;
  }

  BringCustomerProducts(CustomerID){
    var list = this.http.get(this.baseURl + '/' + CustomerID);
    return list;
  }

  baseURl = "http://localhost:52865api/CustomerTables";
  n = 1;
}
