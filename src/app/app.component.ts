import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from "./interfaces/marcador.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = -12.145828;
  lng: number = -77.004410;
  zoom: number = 18;
  marcadorSeleccionado : any = null;

  constructor(public mapasService : MapasService) {
    this.mapasService.cargarMarcadores();
  }

  clickMapa(evento){
    let marcador:Marcador = {
      lat : evento.coords.lat,
      lng : evento.coords.lng,
      title : "Sin titulo",
      draggable : false
    }

    this.mapasService.insertarMarcador(marcador);  
  }

  clickMarcador(marcador:Marcador, index : number){
    this.marcadorSeleccionado = marcador;
  }
  
  dragEndMarcador(marcador:Marcador, evento){
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this.mapasService.guardarMarcadores();
  }


}

