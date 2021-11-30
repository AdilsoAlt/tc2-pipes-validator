import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaAutoMercosul'
})
export class PlacaAutoMercosulPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    var flag = false;
    var regex = '[A-z]{3}[0-9][A-z][0-9]{2}';

    if (value.match(regex) && value.length == 7) {
      value = value.slice(0, 3) + " - " + value.slice(3, 4) + " - " + value.slice(4, 5) + " - " + value.slice(5, 7);
      flag = true;
    }
    if (flag == true) {
      return value.toLocaleUpperCase();
    } else {
      return 'Formatação Inválida';
    }

  }

}
