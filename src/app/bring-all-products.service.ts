import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BringAllProductsService {

  constructor(private http: HttpClient ) { }
  
  BringProducts(){
    var products = this.http.get(this.baseURL);
    return products;  
  }
  baseURL = "http://localhost:52865/api/ProductTables";
}
