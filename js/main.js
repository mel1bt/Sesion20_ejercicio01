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