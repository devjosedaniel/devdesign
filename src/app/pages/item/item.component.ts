import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: string;
  constructor(private router: ActivatedRoute, public productoService: ProductosService) { }
  producto: ProductoDescripcion;
  ngOnInit() {

    this.router.params.subscribe( params => {
      // console.log(params.id);
      this.id = params.id;
      this.productoService.getProducto(params.id)
      .subscribe( (res: ProductoDescripcion) => {
        // console.log(res);
        this.producto = res;
      });
    });
  }

}
