# Sesion20_ejercicio01
## Codigo Inicial
var num2 = 0;

function suma(num1) {
return function() {
return num1 + num2;
}
} 

var suma2 = suma(2);
console.log(suma2(5)); // Debería mostrar 7 de resultado

var suma12 = suma(12);
console.log(suma12(76)) // Debería mostrar 88 de resultado.

## Solucion planteada
#### Para la solucion planteada lo que se modifico los parametros de la funcion que no habian sido declarados. Tambien que la funcion invocada no tenia los parametros definidos.

var num2 = 0;

function suma(num1, num2) {
return function() {
return num1 + num2;
}
} 

var suma2 = suma(2,5);
console.log(suma2()); // Debería mostrar 7 de resultado

var suma12 = suma(12,76);
console.log(suma12()) // Debería mostrar 88 de resultado.
