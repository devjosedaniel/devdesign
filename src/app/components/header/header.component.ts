import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from '../../interfaces/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagina: InfoPaginaService, private router: Router) {

  }

  ngOnInit() {
  }
  buscarProducto(busqueda: string) {
   if (busqueda.length < 1) {
     return;
   }
   this.router.navigateByUrl(`/busqueda/${busqueda}`);
  }
}
