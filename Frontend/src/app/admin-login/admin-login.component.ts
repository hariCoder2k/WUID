import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class Admin{
  constructor(public name:String,public pass:String){}
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public admin!:Admin;
  public  check!:boolean;
  public user:Admin = new Admin('','');
  public res:any;
  public statements!:String;
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
      
  }
  public login(data:Admin)
  {
    this.user=data;
    console.log(this.user);
    if(this.user.name=='' || this.user.pass==''){
      this.statements="*Please fill all fields";
      this.check = true;
    }
    else{
      this.check = false;
      const url = "http://localhost:5555/api/admin_login";
      this.http.post(url, this.user).subscribe((data)=>{
        this.res = data;
        if(this.res.auth == "true"){
          this.router.navigateByUrl('/adminconsole');
        }
        else{
          this.statements = "Wrong credentials";
          this.check=true;
          
        }
      });
    }

  }
}
