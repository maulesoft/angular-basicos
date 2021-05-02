import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

heroes: string[]=['spiderman','superman','thor','batman'];
heroeBorrado: string = '';
  
borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';
 
}
}
