import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BringAllProductsService} from '../bring-all-products.service';
import { AddToCartService } from "../add-to-cart.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: Router, public products: BringAllProductsService, public add: AddToCartService) { }
  ProductsList;

  ngOnInit() {
    this.products.BringProducts().subscribe(data=>{
      this.ProductsList = data as any;
    });
  }

  goHome(){
    this.route.navigate(['User']);
  }
  goToCart(){
    this.route.navigate(['Cart']);
  }
  AddToCart(ProductID){
    var user = JSON.parse(localStorage.getItem("CustomerLoginInfo"));
    this.add.AddProductToCart(ProductID,user.CustomerID,1).subscribe(data=>{
      if(data){
        alert("Product added in cart!");
      }
      else{
        alert("Error in adding product");
      }
    });

  }
  Logout(){
    localStorage.setItem("LoginStatusRst", null);
    this.route.navigate(['Home']);
  }

}
