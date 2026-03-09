/* 
Variables
Son contenedores que almacenan datos, En JS se pueden declarar variables utilizando las palabras clave : var, let y const

var: Es la forma más antigua de declarar variables. Tiene un alcance global y puede ser re-declarada y actualizada

let: Es la forma moderna de declarar variables. Tiene un alcance de bloque o local. Puede ser actualizada pero no redeclararse dentro del mismo alcance

const: Tiene un alcance de bloque y no pueden ser redeclaradas ni actualizadas. Se utilizan con variables que nunca deben cambiar.
*/

//Declaración con var

var pokemon = "Snorlax";

console.log(pokemon)

pokemon = "Dito"

console.log(pokemon)

//Declaración con let

let edad =19;

console.log(edad)

edad = "20"

console.log(edad)

//Declaración con const

const PI = 3.1416

console.log(PI)

/* PI = "Puchunguito" */