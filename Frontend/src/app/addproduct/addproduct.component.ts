import { Component,OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

export class Product{
  constructor(public name:String,public category:String,public description:String,public price:Number,public quantity:Number,public unit:String,public image:String){}
}
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  public res:any;
  public pro:Product = new Product('', '', '',0,0,'','');
  constructor(private http:HttpClient){}
  add(product:any){
    console.log(this.pro.name);
    console.log(this.pro.category);
    console.log(this.pro.description);
    console.log(this.pro.price);
    console.log(this.pro.unit);
    console.log(this.pro.image);
    const url = "http://localhost:5555/addpro";
    this.http.post(url, this.pro).subscribe((data)=>{
      console.log(data);
      this.res = data;
      
    });
  }
}
// {
//   "name": "name",
//   "category":"Seeds",
//   "description":"description",
//   "price":"price",
//   "unit":"unit",
//   "image":"image"
// }