import { Component,OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-allpayments',
  templateUrl: './allpayments.component.html',
  styleUrls: ['./allpayments.component.css']
})
export class AllpaymentsComponent implements OnInit {
  public username: string="admin";
  public res:any;
  constructor(private http: HttpClient ){}
  ngOnInit(): void {
    this.http.get('http://localhost:5555/api/get_all_payments').subscribe(
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
