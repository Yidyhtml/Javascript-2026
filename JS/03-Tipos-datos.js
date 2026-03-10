/* 
Tipos de datos

Son una clasificación de diferentes valores que podemos manejar en un lenguaje de programación.

En JS existen dos tipos de datos que se pueden agrupar en dos categorías: Primitivos y complejos (objetos).

Cada tipo de dato tiene sus características y usos específicos en programación:

1. Primitivos

    Datos básicos que no se consideran objetos y no tienen métodos.

    🌺 Número o Number = Representan valores númericos ya sea enteros o decimales.

    🌺 Cadena de caracteres o Strings = Representan texto. El texto se coloca entre comillas dobles o simples. Hay que ser consistentes en su uso.

    🌺 Boleanos o Boleans = Representan un valor lógico que puede ser verdadero (true) o falso (false)

    🌺 Indefinido o Undefined = Es el valor que se asigna a una variable que ha sido declarada pero no se ha inicializado.
*/


// Numbers
let miEdad = 19;
let miEstatura =1.73;

console.log(miEdad);
console.log(miEstatura);

// Strings

let miNombre = "Yidy"
let miApellido ="Rojas"

console.log(miNombre);
console.log(miApellido);

//Booleans

let esEstudioso = true;
let esFlojo = false;

console.log(esEstudioso)
console.log(esFlojo)

//Undefined

let aprobaraProgramacion;
console.log(aprobaraProgramacion);


/* 
2. Complejos (Objetos)

🌺Arreglo o Array = Es ub conjunto de datos que se almacenan en una lista ordenada. Los datos dentro de un arreglo se escriben entre [] (shift + llaves) y se separan por comas ,

🌺Objetos o Objects = Es un conjunto de múltiples datos en pares: clave - valor. Los datos dentro de un objeto se escriben entre llaves: {} y se separan por comas ,

🌺Funciones o Funcitions = Es un tipo de daro que puede ser invocado. Se declaran con la palabra function y el código que ejecutan va entre llaves {}
*/


//Array

let misCaricaturas = ["Star vs las fuerzas del mal", "Gravitty Falls", "Miraculous Ladybug"];

let misNumeros = [5, 10, 8, 13, 33];

let tutifruti = ["Skibidi", 123456, true, false]


    console.log(misCaricaturas);
    console.log(misCaricaturas[0]);


    console.log(misNumeros);
    console.log(misNumeros[3]);

    console.log(tutifruti)
    console.log(tutifruti[2])


//Objetos

let gato = {
    nombre: "Michu",
    tamaño: "Promedio",
    color:"Atigrado",
    maulla:true,
    rasguña: false,
}

console.log(gato);
console.log(gato.nombre);


// Functions

let saludar = function() {
    //Aqu+i va el código que se ejecuta cuando se invoca a la función
    console.log("Hola, mamá. Estoy aprendiendo JS (｡･∀･)ﾉﾞ")
} 

console.log(saludar)

saludar(); //Invocamos a la función 