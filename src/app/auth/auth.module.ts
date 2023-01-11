import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    AuthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent, 
    RegisterComponent, 
    AuthComponent
  ],
})
export class AuthModule {}
