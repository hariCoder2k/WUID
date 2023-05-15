import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ValidateLoginService } from '../validate-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public totalItems:number = 0;
  public router!:Router;
  public username:String='';
  public validated!:ValidateLoginService;
  constructor(private cartService : CartService ){}
  ngOnInit(){
    this.cartService.getProduct().subscribe(res=>{
      this.totalItems = res.length;
      this.username = LoginService.getUsername();
    })
  }
  logout(){
    LoginService.setSubmitted(false);
  }
}
  