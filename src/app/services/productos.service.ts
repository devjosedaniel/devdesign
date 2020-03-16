import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/interface';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];
  cargando = true;
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }



  private cargarProductos() {

    return new Promise(resolve => {
      this.http.get('https://devdesign-ec.firebaseio.com/productos_idx.json')
        .subscribe((res: any[]) => {
          this.productos = res;
          this.cargando = false;
          resolve();
          // console.log(this.productos);
        });
    });
  }


  getProducto(id: string) {
    return this.http.get(`https://devdesign-ec.firebaseio.com/productos/${id}.json`);
  }


  buscarProducto(busqueda: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(busqueda);
      });
    } else {
      this.filtrarProductos(busqueda);
    }
  }

  private filtrarProductos( busqueda: string ) {
    // console.log(busqueda);
    this.productoFiltrado = [];
    busqueda = busqueda.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf( busqueda) >= 0 || tituloLower.indexOf( busqueda) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
