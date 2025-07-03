// DOM, la mayoria de iteraciones requieren o inician con un "selectores" -> siempre inician con document 
// document hace referencia a tu documento HTML, EN MODE DESARROLLO en consola writte document 

// querySelector(retorna hasta un elemento) y querySelectorAll(selecciona todos lo elementos) -->
// getElemetById --> permitre seleccionar un elemento html por su id

// .clase,  #id, :last-of-type

// funciona como los selectores de css

const heading = document.querySelector('.heading');

console.log(heading);
// Agregando un . despues de la clase tendriamos acceso a los atributos o funciones
// console.log(heading.tagName);
// console.log(heading.textContent);
// console.log(heading.classList);
// console.log(heading.tagName.id);


// de esta manera accedemos a los enlaces mediante el elemnto padre, selecciono la clase del alemento padre y mediante la a accedo a los enlaces
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

// Solo trae de un elemento
const enlace = document.querySelector('.navegacion a');
console.log(enlace);






// Como manipular lo elementos HTML CON JS
heading.textContent = 'Un nuevo heading '
heading.id = 'Un nuevo Id'

