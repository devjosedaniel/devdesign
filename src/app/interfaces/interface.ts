
export interface InfoPagina  {
    titulo?: string;
    email?: string;
    pagina_autor?: string;
    facebook?: string;
    instagram?: string;
    equipo_trabajo?: any[];
}



export interface Equipo {
  frase?: string;
  instagram?: string;
  nombre: string;
  subtitulo?: string;
  url?: string;
}



export interface Producto {
  categoria: string;
  cod: string;
  titulo: string;
  url: string;
}


export interface ProductoDescripcion {
  categoria: string;
  desc1: string;
  desc2: string;
  producto: string;
  resumen: string;
  subtitulo1: string;
  subtitulo2: string;
}