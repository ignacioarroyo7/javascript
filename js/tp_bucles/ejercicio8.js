/*
Crea script para generar pirámide 
siguiente con los nú
del 1 al número que indique el usuario
 (no mayor de 50) 
*/
let i,j;
let num= prompt("Indique el tamaño de la base de la piramide");

if(Number(num)==num){
    num = parseInt(num);
    if(num<0 || num>50){
        alert('Numero ingresado incorrecto: ingresa un numero entre 1 y 50');
    }else{
        for(i=1;i<=num;i++){
            for(j=0;j<i;j++){
                document.write(j+1);
            }
            document.write("<br>");
        }
    }
}else alert('No ingresaste un numero');
