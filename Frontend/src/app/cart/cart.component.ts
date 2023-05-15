import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

export class Order{
  constructor(public odate: String, public grandtotal: Number, public custid:Number,public orderList:any[]){}
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit{
  public product:any = [];
  public o!:Order;
  public order!:Order;
  public total:number = 0;
  public now = new Date();
  constructor(private cartservice : CartService,private http:HttpClient,private router:Router) {}
  ngOnInit(): void {
      this.cartservice.getProduct().subscribe(res=>{
        this.product=res;
        for(var i=0;i<this.product.length;i++){
          if(this.product[i]){}
        }
      })
  }

  getTotal(){
    this.total=0;
    for(var i=0;i<this.product.length;i++){
      this.total += this.product[i].price;
      console.log(this.total);
    }
  }

  makeOrder(){
    console.log("Order processed");
    console.log(this.product);
    this.getTotal();
    CartService.setGrandTotal(this.total);
    console.log(this.total);
    this.order ={
      "odate":  this.now.toLocaleDateString(),
      "grandtotal": this.total,
      "custid":LoginService.getId(),
      "orderList":this.product
    }
    // this.o ={
    //   "odate": "2023-04-30T18:30:00.000Z",
    //   "grandtotal": 100,
    //   "custid": LoginService.getId(),
    //   "orderList": [
    //     {
    //       "name": "Item 1",
    //       "price": 10,
    //       "quantity": 2
    //     },
    //     {
    //       "name": "Item 2",
    //       "price": 20,
    //       "quantity": 3
    //     }
    //   ]
    // }
    this.http.post('http://localhost:5555/api/order',this.order).subscribe((res) => {
      this.router.navigateByUrl('/payment');
  });

    
  }
  removeItem(item:any){
    this.cartservice.removeCartItem(item);
  }

  emptyCart(){
    this.cartservice.removeAllCart();
  }
}
