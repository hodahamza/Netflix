import { Routes } from '@angular/router';
import { Login } from './modules/Auth/login/login';
import { LandingPage } from './modules/Auth/landing-page/landing-page';
import { SignIn } from './modules/Auth/sign-up/sign-up.component';
import { ConfirmplanComponent } from './modules/Auth/sign-up/confirm-plan/confirmplan.component';
import { ConfirmActivationComponent } from './modules/Auth/sign-up/confirm-activation/confirmActivation.component';
import { CheckemailComponent } from './modules/Auth/sign-up/check-email/checkemail.component';
import { CreatepasswordComponent } from './modules/Auth/sign-up/create-password/createpassword.component';
import { ChooseplanComponent } from './modules/Auth/sign-up/choose-plan/chooseplan.component';
import { Choosepayment } from './modules/Auth/sign-up/choose-payment/choosepayment.component';
import { CardpaymentComponent } from './modules/Auth/sign-up/card-payment/cardpayment.component';
import { CashpaymentComponent } from './modules/Auth/sign-up/cash-payment/cashpayment.component';
import { LoginWithPassword } from './modules/Auth/login/login-with-password/login-with-password';
import { LoginWithCode } from './modules/Auth/login/login-with-code/login-with-code';
import { OTP } from './modules/Auth/login/otp/otp';

export const routes: Routes = [
    {path:'' , component:LandingPage},
    {path:'login' , component:Login ,children:[
        {path:'' , redirectTo:"login-password" , pathMatch:'full'},
        {path:'login-password' , component:LoginWithPassword},
        {path:'login-code' , component:LoginWithCode},
        {path:'otp' , component:OTP},
    ]},
    {path:'signup' , component:SignIn , children:[
        {path:'confirm-activation' , component:ConfirmActivationComponent},
        {path:'check-email' , component:CheckemailComponent},
        {path:'create-password' , component:CreatepasswordComponent},
        {path:'choose-plan' , component:ChooseplanComponent},
        {path:'confirm-plan' , component:ConfirmplanComponent},
        {path:'choose-payment' , component:Choosepayment},
        {path:'card-payment' , component:CardpaymentComponent},
        {path:'cash-payment' , component:CashpaymentComponent},

    ]},
];
