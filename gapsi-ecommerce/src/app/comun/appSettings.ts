import { environment } from '../../environments/environment';

export class AppSettings {
  public static COMUN_CONFIG = environment.apiURL + "/comun/configuracion";
  public static USUARIO_OBTENER = environment.apiURL + "/usuario/obtener";
  public static PROVEEDOR_TODOS = environment.apiURL + "/proveedor/obtener-todos";
  public static PROVEEDOR_GUARDAR = environment.apiURL + "/proveedor/guardar";
  public static PROVEEDOR_ELIMINAR = environment.apiURL + "/proveedor/borrar";
}
