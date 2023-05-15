import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { ValidateLoginService } from '../validate-login.service';
import { LoginService } from '../login.service';
export interface Seed{
  name:String;
  _id:number;
  category:String;
  description:String;
  unit:String;
  quantity:number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public validated!:ValidateLoginService;
  public username:any;
  public res:any;
  public Seeds:String = "Seeds";
  public bio:String = "Bio Fertilizer";
  public insect:String ="INSECTICIDES";
  public live:String = "LIVESTOCK PRODUCTS";
  public fung:String = "Fungicide";
  public grow:String="GROWTH PROMOTERS";
  constructor(private http: HttpClient,private cartService:CartService,private router:Router){
    if(!LoginService.getSubmitted()){
      this.router.navigateByUrl('/login');
    }
  }
  ngOnInit(): void {
    this.http.get('http://localhost:5555/api/products').subscribe(
      Response=>{
        if(Response){
          console.log("data received");
        }
        this.res=Response;   
      }
    )
  }

  addtoCart(item:any){
    this.cartService.addToCart(item);
  }

}
