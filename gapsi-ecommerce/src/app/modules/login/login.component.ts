import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/model/config';
import { Usuario } from 'src/app/model/usuario';
import { ComunService } from 'src/app/service/comun.service';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Route: Router,
              private route: ActivatedRoute,
              private usuarioService: UsuarioService,
              private comunService: ComunService
              ) { }

  version! :string;
  usuario!: Usuario;

  ngOnInit() {
    this.usuarioService.getData().subscribe(
      data => {
        this.usuario = data;
      }
    );
    this.comunService.getData().subscribe(
      data => {
        this.version = data.version;
      }
    );
  }

  onContinuar(){
    window.location.href="proveedores"
  }





}
