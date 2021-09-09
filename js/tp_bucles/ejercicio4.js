/*
Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert»
  y  pidiendo números. Al salir con “cancelar”
 deberá indicarse la suma total de los números introducidos.
*/
let sumaTotal = 0;
do{
    let num = prompt('Ingrese un numero'); 
    if(Number(num)==num){
        num = parseInt(num);
        sumaTotal = sumaTotal+num;
    }else{
        alert("No ingresaste un numero");
        }
}while(confirm('Desea continuar?'));

document.write('La suma total de los numeros ingresados es: '+sumaTotal);
