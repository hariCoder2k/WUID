import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


export class User{
  constructor(public name:String,public pass:String){}
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 public res:any;
  public user= new User('','');
  constructor(private http:HttpClient,private router:Router){}
  public signup(data:User){
    const url = "http://localhost:5555/sign_up";
    this.http.post(url, this.user).subscribe((data)=>{
      console.log(data);
      this.res = data;
      
    });
    this.router.navigateByUrl('/login');
  }
}

