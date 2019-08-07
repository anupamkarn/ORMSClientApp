import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor(public http: HttpClient) {}
  AddProductToCart(ProductID,CustomerID,Quantity){
    var status = this.http.post(this.baseURl + '/' + CustomerID + '?Quantity=' + Quantity + '&ProID=' + ProductID,{});
    return status;
  }
  baseURl = "http://localhost:52865/api/CustomerTables";
}
