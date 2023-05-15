import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ValidateLoginService } from '../validate-login.service';

export class User{
  constructor(public name:String,public pass:String){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public submitted!:Boolean;
  public user:User = new User('','');
  public res:any;
  public check: Boolean = false;
  public validated!:ValidateLoginService;
  public statements :String = "*Please Fill all fields";
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {  }
  public login(data:User)
  {
    this.submitted=true;
    this.user=data;
    console.log(this.user);
    if(this.user.name=='' || this.user.pass==''){
      this.statements = "*Please Fill all fields";
      this.check = true;
    }
    else{
      this.check = false;
      const url = "http://localhost:5555/api/user_login";
      this.http.post(url, data).subscribe((data)=>{
        console.log(data);
        this.res = data;
        if(this.res.auth == "true"){
          LoginService.setId(this.res.name,this.res._id);
          LoginService.setSubmitted(true);
          this.router.navigateByUrl('/home');
        }
        else{
          this.statements = "Wrong username or password";
          this.check=true;
          
        }
      });
    }

  }
}
