import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    EsqueciSenhaComponent
  ]
})
export class LoginModule {}
