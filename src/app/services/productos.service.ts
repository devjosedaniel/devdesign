import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  cargando = true;
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }



  private  cargarProductos()  {
    this.http.get('https://devdesign-ec.firebaseio.com/productos_idx.json')
    .subscribe( (res: any[]) => {
      this.productos = res;
      this.cargando = false;
      console.log(this.productos);
    });
  }
}
