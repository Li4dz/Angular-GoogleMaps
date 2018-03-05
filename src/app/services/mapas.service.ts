import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador.interface";

@Injectable()
export class MapasService {

  public marcadores:Marcador[] = [];

  constructor() { 
    let marcador : Marcador = {
      lat : -12.145828,
      lng : -77.004410,
      title : "Casa",
      draggable : true,
      description : "Descripcion de Ejemplo"
    }

    this.marcadores.push(marcador);
  }

  insertarMarcador(marcador:Marcador){
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador(index:number){
    this.marcadores.splice(index, 1);
    this.guardarMarcadores();
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores(){
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }
  }

}
