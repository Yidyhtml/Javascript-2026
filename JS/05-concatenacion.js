/* 
CONCATENACIÓN DE CADENAS DE TEXTPO.

Es el proceso de unir dos o más cadenas de texto en una sola. Esto se hace utilizando el operador "+"

*/

/* console.log(" tengo antojo de " + " una torta de tamal "); */

let nombre = "Yidy";
let apellido = "Han";
let edad = "19"

console.log( "Holii me llamo" + nombre + "" + apellido + "y tengo" + edad + "años.");


/* 
Plantillas literales
Es un espacio que se abre para la combinación de variables, expresiones y cadenas de texto. Ayuda a concatenar de forma más dinámica y simple. Se usan los backticks (acento invertido o acceso)`
*/

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años!`)  

/* Si se utiliza el operador de + con operadores numéricos se suman, pero si se utilizan con cadenas de texto se concatenan */

let a ="5";
let b ="10";

console.log(a + b)