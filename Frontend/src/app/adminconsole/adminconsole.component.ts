import { Component,OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.css']
})
export class AdminconsoleComponent implements OnInit {
  public username: string  = 'admin';
  public res:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:5555/api/getorders').subscribe(
      Response=>{
        if(Response){
          console.log("data received");
          console.log(Response);
        }
        this.res=Response;   
      }
    )
  }
}
