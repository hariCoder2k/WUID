import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-adminstock',
  templateUrl: './adminstock.component.html',
  styleUrls: ['./adminstock.component.css']
})
export class AdminstockComponent {
public username: string="admin";
public res:any;
constructor(private http: HttpClient ){}
ngOnInit(): void {
  this.http.get('http://localhost:5555/api/products').subscribe(
    Response=>{
      if(Response){
        console.log("data received");
      }
      
      console.log(Response);
      this.res=Response;   
    }
  )
}
}
