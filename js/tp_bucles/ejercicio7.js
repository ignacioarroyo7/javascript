/*
 Haz un script que escriba una pirámide 
 inversa de los números del 1 al número que
  indique el usuario (no mayor de 50) 
   de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/


let i, j;
let num= prompt("Indique el tamaño de la piramide");


if(Number(num)==num){
    num = parseInt(num);
    if(num<0 || num>50){
        alert('Numero ingresado incorrecto: ingresa un numero entre 1 y 50');
    }else{
        for(i=num ; i>=1; i--){
            for(j=0;j<i;j++){
                document.write(i);
            }
            document.write("<br>");
        }
    }
}else alert('No ingresaste un numero');
