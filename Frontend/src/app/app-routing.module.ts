import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { AdminstockComponent } from './adminstock/adminstock.component';
import { CartComponent } from './cart/cart.component';
import { AllpaymentsComponent } from './allpayments/allpayments.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ListordersComponent } from './listorders/listorders.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'cart',component:CartComponent},
  { path:'signup', component:SignupComponent},
  {path:'sign',component:SignComponent},
  { path:'login', component:LoginComponent},
  {path:'about',component:AboutusComponent},
  {path:'payment', component:PaymentComponent},
  {path:'adminconsole', component:AdminconsoleComponent},
  {path:'adminstocks', component:AdminstockComponent},
  {path:'allpayment',component:AllpaymentsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:"alogin", component:AdminLoginComponent},
  {path:"listorders", component:ListordersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
