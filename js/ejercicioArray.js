let peliculas= [];

do{
   let pelicula = prompt("Ingrese una pelicula: ");
   peliculas.push(pelicula);
}while(confirm('Desea continuar?'));

for(let i=0;i<peliculas.length;i++){
    document.write('Peli'+(i+1)+': '+peliculas[i],'<br>')
}

