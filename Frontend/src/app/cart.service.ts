import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any =[];
  public productList = new BehaviorSubject([]);
  public static grandTotal : Number=0;
  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  static setGrandTotal(total:Number){
    CartService.grandTotal=total;
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }

  removeCartItem(product:any){
    for(var i=0;i<this.cartItemList.length;i++){
      if(this.cartItemList[i].name === product.name){
        console.log(this.cartItemList[i]);
        this.cartItemList.splice(i, 1);
      }
    }
    this.productList.next(this.cartItemList)
  }

  removeAllCart()
  {
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
    
  }
}
