/*
Realiza un script que pida número de filas y columnas
 y escriba una tabla. Dentro cada una de las celdas
  deberá escribirse un número consecutivo en orden descendente.
   Si, por ejemplo, la tabla es de 7×5
    los números irán del 35 al 1.
*/

let row = prompt('Indique la cantidad de filas: ');
let col = prompt('Indique la cantidad de columnas: ');
let i,j;

if(Number(row)==row && Number(col)==col){
    row = parseInt(row);
    col = parseInt(col);
    let res = row*col;
    
    document.write('<table border>');

    for(i=0;i<row;i++){
        document.write("<tr>");
        for(j=0;j<col;j++){
            document.write("<td>");
            document.write(res,' ');
            res--;
            document.write("</td>");
        }
        
    }

    document.write('</table>');

}else alert('No ingresaste un numero en la cantidad de filas o columnas');
