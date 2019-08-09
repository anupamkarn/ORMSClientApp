import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(public http: HttpClient) { }

  placeOrder(CustomerID){
    var status = this.http.post(this.baseURL + '/' + CustomerID, "");
    return status;
  }
  baseURL = "http://localhost:52865/api/CustomerTables";
}
