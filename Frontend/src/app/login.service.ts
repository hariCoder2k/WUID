import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public static id:Number;
  public static cname:String;
  public static submitted:Boolean = false;
  constructor(private http:HttpClient) { }
  static getId():Number { return LoginService.id}
  static getSubmitted():Boolean { return LoginService.submitted;}
  static setSubmitted(value:Boolean) { LoginService.submitted =value;}
  static getUsername():String { return LoginService.cname;}
  static setId(value:String,id:Number){LoginService.cname = value;LoginService.id=id}
}
