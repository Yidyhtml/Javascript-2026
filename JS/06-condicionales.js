/* 
Condicionales

Son estructuras de control que permíten ejecutar diferentes bloques de código según una condición (verdadero o falso)

1. If (si)
Evaluar una condsición y si es verdadera (true), ejecuta el código dentro de las llaves

Sintaxis 

if(condición){
//Código que se ejecuta
}
*/

let edad = 13;
if(edad >= 18){
    //código que se ejecuta
    console.log("Eres mayor de edad, puedes ver este contenido")
}

/* 

2.else (no es verdadero)
    Permíte ejecutar un blqoue de código si la condición es falsa

    sintaxis:

    if(condición){
    //código que se ejecuta si es verdadero
    } else{
        //código que se ejecuta si es falso
        }
    */


    let hora = 16;

    if(hora < 12){
    //código que se ejecuta si es verdadero
    console.log("Buenos días estrellitas!")
    } else{
        //código que se ejecuta si es falso
        console.log("Buenas tardes y ya.")
        }


    /* 
    3. else if (si no es verdadero)

    Nos va a permitir tenr más de una condición para ser evaluada. Esta evaluación es secuencia, has que una condición sea verdadera entonces se ejecutará el bloque de código.

    sintaxis:

if(condición){
    //código que se ejecuta si es verdadero
} else if (condición) {
        //código que se ejecuta si la condición es verdadera
        } else{
        //código que se ejecuta si es falso
        }

    */


        let calificacion = 10;
        if(calificación >= 9){
            console.log("Eres un excelente programador")
        } else if(calificacion >= 7) {
            console.log("Vas por buen camino")
        } else if(calificacion >= 5) {
            console.log("Échalegans o te vas a extra")
        } else {
            console.log("Nos vemos en extra")
        }