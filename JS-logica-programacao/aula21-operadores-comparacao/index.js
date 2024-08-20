
// Operadores de comparação:

// Maior que '>'
const comp = 10 > 5;
console.log(comp);

// Maior ou igual a '>='
const comp1 = 10 >= 11;
console.log(comp1);

// Menor que '<'
const comp2 = 10 < 5;
console.log(comp2);

// Menor ou igual a '<='
const comp3 = 10 <= 10;
console.log(comp3);

// Igualdade '==', checa apenas os valores. (difere de =/ atribuição)
const num1 = 10; // number
const num2 = '10'; // string 
const comp4 = num1 == num2;
console.log(comp4); // true = correção de tipo

// Igualdade estrita '===', checa valor e tipo de dado
const num3 = 10; // number
const num4 = '10'; // string 
const comp5 = num3 === num4;
console.log(comp5); // false = pois verifica também o tipo de dado

// Diferente de '!='
const num5 = 10; 
const num6 = 10;  
const comp6 = num5 != num6;
console.log(comp6);  // false

// Diferente estrito '!==', checa o tipo de dado
const num7 = 10; 
const num8 = '10';  
const comp7 = num7 !== num8;
console.log(comp7);  // false

