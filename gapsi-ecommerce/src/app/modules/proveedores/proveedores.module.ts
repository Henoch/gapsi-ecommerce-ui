import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProveedoresComponent
  ],
  providers:[
    ProveedorService
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    NgbPaginationModule,
    FormsModule
  ]
})
export class ProveedoresModule { }
