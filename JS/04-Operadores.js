alert("opeadores enlazados")

/* 
OPERADORES

Son símbolos q  ue indican al interprete que debe realizarse una operación matem+atica lógica o relacional y producir un resultado.

    1. Operadores Aritméticos.
    Se utilizan para operaciones matemáticas básicas como la suma, resta, multiplicación y división.
    + suma
    - resta 
    * multiplicación
    / división
    % módulo o residuo de una división
    ++ incremento (suma una unidad al valor)
    -- decreemnto (resta uno al valor)

*/

let a =10;
let b =5;

console.log(a + b) // Expresión: es el conjunto de valores, variables y operadores.
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
a++;
console.log(a);
b--;
console.log(b);

/* 
2. Operadores de Asignación
Estos operadores se utilizan para asignar valores a las variables.

= asignación
+= suma y asigna
-= resta y asigna
*= multiplica y asigna
/= divide y asigna
%= residuo y asigna

*/

let c = 20;
console.log(c);

c +=5
console.log(c);

c-=10
console.log(c);

c*=2
console.log(c);

c/=3
console.log(c);

c%=3
console.log(c);


/* 
3. Operadores de comparación
Se utilizan para comprara dos valores o expresiones y devuelve un valor booleano (true o false)

== igualdad, compara solo el valor.
=== igualdad estricta, compara el valor y el tipo de dato.
!= desigualdad, compara unicamente el valor.
!== desigualdad estricta, compara el valro y el tipo de dato.
> mayor que
< menor que
>= mayor o igual que otro
<= menor o igual que otro

*/

let d = 10;
let e = "10";

console.log(d == e);
console.log(d === e);
console.log(d != e);
console.log(d !== e);

console.log(d > 5);
console.log(d < 15);
console.log(d >= 10);
console.log(d <= 5);



/* 
4. Operadores Lógicos
Los utilizamos para convinar expresiones booleanas.

&& AND (Y)-Si ambos valores o expresiones son verdaderos, entonces el resultado será verdadero. Si al menos un valor es falso el resultado será falso.

|| OR (o) -Si al menos un valor es verdadero el resultado será verdadero, solo si ambos valores son falsos el resultado será falso.

! NOT (no) - Niega el valor. El resultado es el valor contrario al que está asignado.

*/

let f = true;
let g = false;

console.log(f && g)
console.log(f || g)
console.log( !f )
console.log( !g )


