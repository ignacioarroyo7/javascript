/*
Escribir un programa que solicite la edad 
y si es mayor de 18 años mostrar un mensaje 
que ya puede conducir, si la edad ingresada no es
 un número válido indicarlo en un mensaje.
*/

let edad = prompt('Ingrese su edad: ');

if(edad>0 && edad>18){
    document.write('Puede conducir <br>');
}else{
    if(edad>0 && edad<18){
        document.write('No puede conducir <br>');
    }else{
        document.write('Edad ingresada incorrecta <br>');
    }

}