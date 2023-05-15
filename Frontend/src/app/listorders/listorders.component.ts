import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
export class Customer{
  constructor(public custid:Number){}
}
@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit{
  public custid: Number = 0;
  public customer = new Customer(0);
  public results:any;
  constructor(private http:HttpClient,private router:Router) {
    if(!LoginService.getSubmitted()){
      this.router.navigateByUrl('/login');
    }
  }
  ngOnInit(): void {
    this.custid=LoginService.getId();
    this.customer.custid=this.custid;
    console.log(this.customer);
    const url = "http://localhost:5555/api/listorders";
    this.http.post(url,this.customer).subscribe(
      Response=>{
        if(Response){
          console.log("orders received");
          this.results=Response; 
          console.log(this.results);
        }   
          
      }
    )
  }

}
