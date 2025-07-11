// DOM, la mayoria de iteraciones requieren o inician con un "selectores" -> siempre inician con document 
// document hace referencia a tu documento HTML, EN MODE DESARROLLO en consola writte document 

// querySelector(retorna hasta un elemento, el primero qu coincida con la condición) y querySelectorAll(selecciona todos lo elementos) -->
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

//Para eliminar usamos remove, eliminamos el id, tal elemento o atributo va entre ' ' 
// Si solo uso remove eliminara el elemento html 
heading.removeAttribute('id');

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Un nuevo valor... desde el DOM'
// enlaces.forEach( enlace => enlace.textContent = 'Nuevo enlace');







// Eventos del DOM -> https://developer.mozilla.org/es/docs/Web/API/Element
// Eventos permiten hacer interactiva una pagina web: Onclick()
heading.textContent = 'Un nuevo titulo';

// Usamo el metodo addEventListener para agregar un evento, click, seguido de una funcion flecha o llamada callBack, al presionar el texto dentro del  heading cambia el texto por el evento click
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo heading al dar click...'
})

heading.addEventListener( 'mouseenter', () => {
    heading.textContent = 'nuevo headin al dar click'
})

heading.addEventListener('mouseleave', () => {
    heading.textContent = 'Saliendo';
})


// e = event o evento, arroja informacion sobre el evento que se esta llevando a cabo 
// target --> nos muestra el detalle, sobre que elemento se ejecuto el disparador o a que le dimos click 
// ahi elementos que por defecto tienen un comportamiento como en los enlaces dar un salto de linea
// Para prevenir u omitir tal accion por defaul podemos usar ---->  preventDefault()
enlaces.forEach( enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.textContent = 'Diste click'
        console.log(e.target);
        // console.log('Diste un clieck en un enlace');
    })
})







// Inputs 
