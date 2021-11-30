import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaAutoAntigo'
})
export class PlacaAutoAntigoPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    var flag = false;
    var regex = '[A-z]{3}[0-9]{4}';
    if (value.match(regex) && value.length == 7) {
      value = value.slice(0, 3) + "-" + value.slice(3, 7)
      flag = true;
    }
    if(flag == true){
      return value.toLocaleUpperCase();
    }else{
      return 'Formatação Inválida';
    }
    
  }

}
