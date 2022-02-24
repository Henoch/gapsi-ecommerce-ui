import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
})
export class ProveedoresComponent implements OnInit {
  proveedores$: Proveedor[] = [];
  proveedores: Proveedor[] = [];
  proveedor : Proveedor = {
    proveedorId :  0,
    estatus :  0,
    nombre :  "",
    razonSocial :  "",
    direccion :  ""
  };

  page: number = 1;
  pageSize: number = 4;
  collectionSize: number = 0;

  closeResult = '';

  constructor(
    private proveedorService: ProveedorService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.proveedorService.getDataAll().subscribe((data) => {
      this.proveedores$ = data;
      this.collectionSize = this.proveedores$.length;
      this.refreshProveedores();
    });
  }

  refreshProveedores() {
    this.proveedores = this.proveedores$
      .map((proveedor, i) => ({ id: i + 1, ...proveedor }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  onAgregar(content: any) {
    this.proveedor = new Proveedor(0,0,"","","");
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.proveedorService.guardar(this.proveedor);
          this.ngOnInit();

        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onGuardar() {}
}
