import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgmCoreModule } from '@agm/core';  
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MapasService } from './services/mapas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvYWK20ULNc9R5_IB0bv035QlBlQQ4Nlw'
    })],
  providers: [ MapasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
