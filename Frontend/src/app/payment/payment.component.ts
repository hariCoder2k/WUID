import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


export class Payment{
  constructor(public name: String,public cardno: String,public cvv:String,public amount:Number,public edate:String) {

  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
    public grandTotal: Number=0;
    public statements:String='';
    public check:Boolean=false;
    public payment: Payment = new Payment('','', '',0, '');
    public res:any;
    constructor(private http:HttpClient,private router:Router){
      if(!LoginService.getSubmitted()){
        console.log('Please login');
        this.router.navigateByUrl('/login');
      }
    }
    ngOnInit(){
      this.payment.amount=CartService.grandTotal;
      this.grandTotal = this.payment.amount;
      console.log(this.payment.name);
    }
    pay(paym:Payment){
      this.payment.amount=CartService.grandTotal;
      if(this.payment.name==''|| this.payment.edate==''||this.payment.cardno==''||this.payment.cvv==''){
          this.statements="*Please fill all fields";
      }
      else if(this.payment.cardno.length < 14 ){
        this.statements = "*Invalid card number";
      }
      else{
        this.statements='';
        console.log(this.payment.name);
        console.log(this.payment.amount);
        console.log(this.payment.edate);
        console.log(this.payment.cardno);
        console.log(this.payment.cvv);
        this.http.post('http://localhost:5555/api/payment',this.payment).subscribe((res) => {
          this.res = res;
      });
      this.router.navigateByUrl('/home');
      }

      
    }

}
