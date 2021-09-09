//funciones

// declaracion de funciones sin parametros

function aumentarPrecio(){
    let disney=385;
    let inflacion = 150;

    document.write('El valor total del servicio de disnes plus $'+(disney+inflacion));
};

//llamada de una funcion
//aumentarPrecio();


//crear funcion que muestre los elementos del arreglo
function mostrarSeries(){
    for(let posicion=0; posicion<series.length; posicion++){
        document.write('<br> Serie: '+series[posicion],'<br>');
    }
}


//funciones con parametros
let precioProducto = parseFloat(prompt('Ingrese el precio del producto: '));
let coeficienteInflacion = parseFloat(prompt('Ingrese el monto total de la inflacion del mes'));

function actualizarPrecio(precioProducto,inflacion,nombreProducto){
    document.write('El valor actualizado de '+nombreProducto+' es: $'+(precioProducto*coeficienteInflacion));
}

actualizarPrecio(precioProducto,coeficienteInflacion,'teclado HyperX');
