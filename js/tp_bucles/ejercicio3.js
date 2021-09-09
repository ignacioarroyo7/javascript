/*
Realiza un script que pida cadenas de texto 
 hasta que se pulse “cancelar”. Al salir con “cancelar”
  deben mostrarse todas las cadenas concatenadas
   con un guión -.
*/

let resultado = "";

do{
    let palabra = prompt('Ingrese una palabra: ');
    resultado = resultado+palabra+'-';
}while(confirm('Desea continuar?'));

document.write(resultado);