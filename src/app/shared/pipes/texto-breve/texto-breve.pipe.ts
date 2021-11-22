import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoBreve'
})
export class TextoBrevePipe implements PipeTransform {

  transform(texto:string,largo:number=25): string {
    if(!texto) return ''
    if(texto.length < largo) return texto
    return texto.substr(0,largo)+"...";
  }

}
