import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monto'
})
export class MontoPipe implements PipeTransform {

  transform(value: any) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

}
