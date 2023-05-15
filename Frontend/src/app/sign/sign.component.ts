import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

export class User{
  constructor(public name:String,public oname:String,public street:String,public city:String,public zip:number,public pass:String){}
}
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
   public user:User = new User('','','','',0,'');
   public res:any;
   public cpass!:String;
   public statements:String=''
   constructor(private http:HttpClient,private router:Router){
    
   }
   public signup(data:User){
    if(this.user.name==''||this.user.oname==''||this.user.street==''||this.user.pass==''||this.user.zip==0||this.user.city==''){
      this.statements="*Please fill all the fields";
    }
    else if(this.user.zip <= 0){
      this.statements="*Invalid zip code";
    }
    else if(this.user.pass != this.cpass){
      this.statements="*Passwords must match";
    }
    else{
      this.statements='';
      const url = "http://localhost:5555/register";
      this.http.post(url, this.user).subscribe((data)=>{
      console.log(data);
      this.res = data;
       
     });
     this.router.navigateByUrl('/login');
    }

  }
}
