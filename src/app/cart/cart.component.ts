import { Component, OnInit } from '@angular/core';
import { AllProdustsOfCustomerService } from "../all-produsts-of-customer.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : any [];
  constructor( public cart: AllProdustsOfCustomerService ) { }

  ngOnInit() {
    var cust = JSON.parse(localStorage.getItem("CustomerLoginInfo"));
    alert(cust.CustomerID);
    this.cart.BringCustomerProducts(cust.CustomerID).subscribe(data=>{
      console.log(data);
    });
  }

  
}
