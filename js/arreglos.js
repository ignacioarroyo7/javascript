
//Inicializar un arreglo
let series = ['DB','Naruto','DeathNote'];


//asi se accede a un elemento de un arreglo: nombreArreglo[posicionElemento]
////document.write("Serie: "+series[1]);


//agregar un elemento al final del arrelgo

//series.push('Loky');

//document.write("<br>Serie: "+series[3]);

//para saber la cantidad de elementos que tiene un arreglo
//console.log(series.length);

let serieUsuario = prompt('Ingrese una serie: ');
series.push(serieUsuario);
//console.log(series.length);


//mostrar todos los elementos de un arrelgo tengo que usar un bucle, por preferencia es un for

for(let posicion=0; posicion<series.length; posicion++){
    document.write('<br> Serie: '+series[posicion],'<br>');
}
document.write('<br>----------------------<br>');

//modificar un elemento del arreglo, solo debo sobreescribirlo
series[0]='One piece';

//agregar un elemento en una posicion especifica, siempre que tenga 3 parametros con el metodo splice es porque voy a agregar algo
series.splice(1,0,'Narutardo');

//Borrar todo desde una posicion, desde 3 para adelante borra todo
series.splice(3);

//borrar todo el array
series.splice(0);

//borrar el primer elemento
series.splice(0,1);



for(let posicion=0; posicion<series.length; posicion++){
    document.write('<br> Serie: '+series[posicion],'<br>');
}