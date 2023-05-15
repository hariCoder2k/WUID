import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { AdminstockComponent } from './adminstock/adminstock.component';
import { AllpaymentsComponent } from './allpayments/allpayments.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ListordersComponent } from './listorders/listorders.component';
import { SignComponent } from './sign/sign.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    AboutusComponent,
    PaymentComponent,
    CartComponent,
    AdminconsoleComponent,
    AdminstockComponent,
    AllpaymentsComponent,
    AddproductComponent,
    AdminLoginComponent,
    ListordersComponent,
    SignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
