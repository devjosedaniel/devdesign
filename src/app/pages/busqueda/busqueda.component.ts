import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  busqueda: string;
  constructor(private router: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {
    // this.busqueda = this.router.snapshot.paramMap.get('palabra');
    this.router.params.subscribe( params => {
      this.productoService.buscarProducto(params.palabra);
    });
    // console.log(this.busqueda);

  }

}
