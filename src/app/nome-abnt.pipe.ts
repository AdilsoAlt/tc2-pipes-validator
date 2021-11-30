import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeABNT'
})
export class NomeABNTPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    var arrayNomes = value.split(" ");
    var strNomes = "";
    var flag = false;
    if (arrayNomes.length >= 2) {
      if (arrayNomes.length == 2) {
        var nomePrincipal = arrayNomes[0];
        strNomes = strNomes + arrayNomes[1].toUpperCase() + ", " + nomePrincipal[0].toUpperCase() + nomePrincipal.substr(1);
      }else{
        for(var x = 0; x < arrayNomes.length; x++){
          if(x == (arrayNomes.length - 1)){
            strNomes = arrayNomes[x].toUpperCase() + ", " + strNomes;
          }else if (x == 0){
            var nomePrincipal = arrayNomes[0];
            strNomes = nomePrincipal[0].toUpperCase() + nomePrincipal.substr(1) + " " + strNomes;
          }else{
            var aux = arrayNomes[x];
            strNomes = strNomes + aux[0].toUpperCase()+". ";
          }
        }
      }
      flag = true;
    }
    if (flag == true) {
      return strNomes;
    } else {
      return 'Formatação Inválida';
    }
  }

}
