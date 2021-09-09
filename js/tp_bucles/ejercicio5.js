/*
Realizar una página con un script que calcule el valor
 de la letra de un número de DNI 
 (Documento nacional de identidad).

El algoritmo para calcular la letra del dni
 es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera
 entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá 
una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, 
    N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá
indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el
 usuario pulse «cancelar».

*/

let nroDni = parseInt(prompt('Ingrese su numero de DNI:'));
let resultado;

if (nroDni<0 || nroDni>99999999){
    document.write('<br>Numero ingresado incorrecto! Intente de nuevo y recuerde que el numero se encuentre entre 0 y 99999999');
}else{
    resultado = nroDni%23;
    console.log(resultado)
    switch(resultado){
        case 0:{
            document.write('<br>T');
        }break;
        case 1:{
            document.write('<br>R');
        }break;
        case 2:{
            document.write('<br>W');
        }break;
        case 3:{
            document.write('<br>A');
        }break;
        case 4:{
            document.write('<br>G');
        }break;
        case 5:{
            document.write('<br>M');
        }break;
        case 6:{
            document.write('<br>Y');
        }break;
        case 7:{
            document.write('<br>F');
        }break;
        case 8:{
            document.write('<br>P');
        }break;
        case 9:{
            document.write('<br>D');
        }break;
        case 10:{
            document.write('<br>X');
        }break;
        case 11:{
            document.write('<br>B');
        }break;
        case 12:{
            document.write('<br>N');
        }break;
        case 13:{
            document.write('<br>J');
        }break;
        case 14:{
            document.write('<br>Z');
        }break;
        case 15:{
            document.write('<br>S');
        }break;
        case 16:{
            document.write('<br>Q');
        }break;
        case 17:{
            document.write('<br>V');
        }break;
        case 18:{
            document.write('<br>H');
        }break;
        case 19:{
            document.write('<br>L');
        }break;
        case 20:{
            document.write('<br>C');
        }break;
        case 21:{
            document.write('<br>K');
        }break;
        case 22:{
            document.write('<br>E');
        }break;
        
        
        default: document.write('<br>Error!');
    }
}