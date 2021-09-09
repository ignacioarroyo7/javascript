/**
 Escribir un programa que solicite una nota (número)
  de 0  a 10. Luego mostrar la calificación en un alert
   según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un numero que no esté dentro del 
rango de 0 a 10 mostrar un mensaje de “número erróneo”.
 Si el numero ingresado no es válido mostrar el mensaje
  “Introduce un número válido”.

 */

let nota = parseInt(prompt('Ingrese la nota: '));

/* RESUELTO CON IF
if(nota>=0 && nota<=2){
    document.write('<br> Muy deficiente');
}else if(nota==3 || nota==4){
    document.write('<br> Insuficiente');
}else if(nota==5 || nota==6){
    document.write('<br> Suficiente');
}else if(nota==7){
    document.write('<br> Bien');
}else if(nota==8 || nota==9){
    document.write('<br> Suficiente');
}else if(nota==10){
    document.write('<br> Sobresaliente');
}else{
    document.write('Nota ingresada incorrecta');
}
*/



//RESUELTO CON SWITCH

if(nota<0 || nota>10){
    document.write('<br>Nota ingresada Incorrecta')
}else{
    switch(nota){
        case 3:{
            document.write('<br> Insuficiente');
        }break;
        case 4:{
            document.write('<br> Insuficiente');
        }break;
        case 5:{
            document.write('<br> Suficiente');
        }break;
        case 6:{
            document.write('<br> Suficiente');
        }break;
        case 7:{
            document.write('<br> Bien');
        }break;
        case 8:{
            document.write('<br> Notable');
        }break;
        case 9:{
            document.write('<br> Notable');
        }break;
        case 10:{
            document.write('<br> Sobresaliente');
        }break;

        //en este caso, el default abarca las respuestas cuando nota es 0,1 o 2, ya que son iguales
        //y la validacion de la nota para que sea entre 0 y 10 la hago al principio en el if
        default: document.write('<br> Muy deficiente');
    }
}

