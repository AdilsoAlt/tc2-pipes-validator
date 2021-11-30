import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telUS'
})
export class TelUSPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    var flag = false;
    var valor = parseInt(value);
    if (isNaN(valor)) {
      flag = false
    } else if (value.length == 8) {
      value = value.slice(0, 4) + "-" + value.slice(4, 8);
      flag = true;
    } else if (value.length == 10) {
      value = "(" + value.slice(0, 2) + ")" + " " + value.slice(2, 6) + "-" + value.slice(6, 10);
      flag = true;
    } else if (value.length == 11) {
      value = "(" + value.slice(0, 2) + ") " + value.slice(2, 3) + " " + value.slice(3, 7) + "-" + value.slice(7, 11);
      flag = true;
    } else if (value.length == 12) {
      value = "+" + value.slice(0, 2) + " (" + value.slice(2, 4) + ")" + " " + value.slice(4, 8) + "-" + value.slice(8, 12);
      flag = true;
    }else if (value.length == 13){
      value = "+"+value.slice(0,2)+ " ("+value.slice(2,4)+") " + value.slice(4,5) + " " + value.slice(5,9) + "-"+ value.slice(9,13);
      flag = true;
    }


    if (flag == true) {
      return value;
    } else {
      return 'Formatação Inválida';
    }
  }

}
