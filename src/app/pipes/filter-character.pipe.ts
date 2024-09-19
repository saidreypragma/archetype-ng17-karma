import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacters',
  standalone: true
})
export class FilterCharacterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!value || !args) {
      return value;
    }
    const resultadoBusqueda = [];

    for( const nombre of value){
      if(nombre.name.toLowerCase().indexOf(args) > -1 ||
      nombre.name.toUpperCase().indexOf(args) > -1 ||
      nombre.name.indexOf(args) > -1
      ) {
        resultadoBusqueda.push(nombre);
      }
    }
    return resultadoBusqueda;
  }

}
