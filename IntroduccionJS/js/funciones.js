// funciones declaration la puedes llamar antes de declararla

// function sumar(){
//     console.log( 1 + 1 );
// }

// console.log(sumar2(5,7));
// function sumar2(a,b){
//     return a + b;
// }

// resultado = sumar2(23, 45);
// console.log(resultado);

//function expression son las que usan una variable para almacenar una funcion, con este tipo de sintaxis no puedes mandar a llamar una funcion antes de declararla 
export const sumar1 = (a,b) =>  a + b;

// console.log(sumar1(10,21));





// arrow functions son similares a las function expressions, no usan la palabra function 
// const add = (number1 = 19, number2 = 21) => console.log(number1 + number2);
// add()



// funciones que retornan valores con el uso de reutrn tal valor lo podemos utilizar para hacer x cosa como asignar el valor a otra variable 
export function multiplicar(valor1, valor2){
    return valor1 * valor2;
}

// const resultado1 = multiplicar(65,2);
// console.log(resultado1);


// con arrow function, cuando solo son de una linea podemos omitir el return 
// const dividir = (valor3, valor4) => valor3 / valor4;
// const resultado2 = dividir(5,4);
// console.log(resultado2);




// Otra forma de usar el export, es exactamente los mismo pero sin usar export al inicion de cada una de las funciones
// export {
//     sumar1, multiplicar
// }




// Export defaul tiene dos caracteristicas 1- Solo puede existir un export defaul por archivo, 2-Lo puedes importar y lo puedes nombrar con el nombre que quieras, no necesitas escribirlo entre{}
// export default function division(n3, n4){
//     return n3 / n4;
// }

// Covertir una funcion a arrow fuction cuando usa export defaul se añade a la siguiente linea
const division = (n3, n4) => n3 / n4;
export default division

// Restar 
export const restar = (n3, n4) => n3 - n4;