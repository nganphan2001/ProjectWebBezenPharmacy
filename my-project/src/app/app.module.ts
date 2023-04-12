import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { InforComponent } from './infor/infor.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AdminMessengerComponent } from './admin-messenger/admin-messenger.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentMomoComponent } from './payment-momo/payment-momo.component';
import { PaymentBankingComponent } from './payment-banking/payment-banking.component';
import { AdminCartManagementComponent } from './admin-cart-management/admin-cart-management.component';
import { AdminOrdermanagementComponent } from './admin-ordermanagement/admin-ordermanagement.component';
import { AdminOrerManagementComponent } from './admin-orer-management/admin-orer-management.component';
import { AdminProductManagementComponent } from './admin-product-management/admin-product-management.component';
import { AdminCaterogyManagementComponent } from './admin-caterogy-management/admin-caterogy-management.component';
import { AdminCustonerManagementComponent } from './admin-custoner-management/admin-custoner-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    OrderdetailComponent,
    ChatboxComponent,
    InforComponent,
    HomeComponent,
    CategoryComponent,
    ProductdetailComponent,
    AdminMessengerComponent,
    ShoppingcartComponent,
    PaymentComponent,
    PaymentMomoComponent,
    PaymentBankingComponent,
    AdminCartManagementComponent,
    AdminOrdermanagementComponent,
    AdminOrerManagementComponent,
    AdminProductManagementComponent,
    AdminCaterogyManagementComponent,
    AdminCustonerManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
