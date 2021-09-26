import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  template: `
  <nav class="nav">
    <div class="logo">
      <img src="https://cdn.iconscout.com/icon/free/png-256/angular-5-457929.png" class="imagen">
    </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Promociones</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
  </nav>
  
  `
})
export class MiComponente{
    constructor(){
      console.log("Componente mi-componente cargado");
    }
}