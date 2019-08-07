import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  UserListDet: UserDet[]; 


  constructor(public gu:GetUserService) {  }

  UpdateCustomerStatus(CustomerID,Status){
    this.gu.UpdateCustomer(CustomerID,Status).subscribe(data=>{
      
        this.gu.GetUsers().subscribe(data=>{
          this.UserListDet = data as UserDet[];
        })
      
    })  
  }

  ngOnInit() {
    this.gu.GetUsers().subscribe(data=>{
      
    this.UserListDet = data as UserDet[]; 
    
    
    })
  }

 
}

export class UserDet{
  customername: string
  email: string
  status: number
}