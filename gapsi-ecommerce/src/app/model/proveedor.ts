export class Proveedor {
  proveedorId: number;
  estatus: number;
  nombre: string;
  razonSocial: string;
  direccion: string;

  constructor(
    proveedorId: number,
    estatus: number,
    nombre: string,
    razonSocial: string,
    direccion: string
  ) {
    this.proveedorId = proveedorId;
    this.estatus = estatus;
    this.nombre = nombre;
    this.razonSocial = razonSocial;
    this.direccion = direccion;
  }
}
