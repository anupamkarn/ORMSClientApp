import { Component, OnInit } from '@angular/core';
import { AllProdustsOfCustomerService } from "../all-produsts-of-customer.service";
import { ProductsInCart } from "../model/productsInCart";
import { PlaceOrderService } from "../place-order.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: ProductsInCart;
  list: any [];
  constructor( public cart: AllProdustsOfCustomerService, public POrder: PlaceOrderService, public router: Router ) { }

  ngOnInit() {
    var cust = JSON.parse(localStorage.getItem("CustomerLoginInfo"));
    this.cart.BringCustomerProducts(cust.CustomerID).subscribe(data=>{
      //console.log(data);
      this.products = new ProductsInCart;
      this.products = data as ProductsInCart;
      this.list = this.products.ListOfProductsInCart;
    });
  }

  PlaceOrder(){
    var Customer = JSON.parse(localStorage.getItem('CustomerLoginInfo'));
    this.POrder.placeOrder(Customer.CustomerID).subscribe(data=>{
      if(data){
        alert("Order Placed");
        this.router.navigate(['User']);
      }
    });
  }

  goHome(){
    this.router.navigate(['User']);
  }
  goToCart(){
    this.router.navigate(['Cart']);
  }
  Logout(){
    localStorage.setItem("CustomerLoginInfo", null);
    this.router.navigate(['Home']);
  }

  
}
