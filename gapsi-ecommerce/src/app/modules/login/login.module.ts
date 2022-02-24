import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ComunService } from 'src/app/service/comun.service';
import { UsuarioService } from 'src/app/service/usuario.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    ComunService,
    UsuarioService
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
