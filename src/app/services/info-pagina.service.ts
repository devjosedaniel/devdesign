import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, Equipo } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: Equipo[] = [];
  cargada = false;
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }


  private cargarInfo() {
    this.http.get('assets/data/data.json')
    .subscribe( (res: InfoPagina) => {
      this.cargada = true;
      this.info = res;
      // console.log(res);
    });
  }

  private cargarEquipo() {
    this.http.get('https://devdesign-ec.firebaseio.com/equipo.json')
    .subscribe( (res: any[]) => {
      this.equipo = res;
      // console.log(this.equipo);
    });
  }
}
