// Podemos usar alias para no tener probleas con los nombres con as podemos renombrar la funcion 
import entre, { sumar1 as add, multiplicar, restar } from "./funciones.js"

//Optional chaining se defino con (?), permite acceder a las propiedades o metodos de un objeto
//valida si una propiedad existe, si existe lo ejecuta si no manda undefine, pero el resto del codigo se sigue ejecutando, sin usarlo truena el mismo 
//se usa mucho en respuestas de API, en una base de datos cuando no retorna todos los campos etc..

const alumno = {
    nombre: "Juan",
    apellido: "Garcia",
    edad: 28,
    clase: "Programacion",
    aprobado: true,
    examenes: {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1);


//Nullish coalescing operator (??)  ->  es un operador logico 
// retorna el valor que esta de lado derecho cuando el valor el valor que esta de lado izquierdo es null o undefine/1, si tiene valor toma el de la izquiera e ignora el de la derecha
// se usa para paginadores
const pagina = null ?? 1;
console.log(pagina);




// Evaluación de corto circuito thuthy o falsy usa &&
//es una técnica que permite optimizar la evaluación de expresiones lógicas,
// se usa para  revisar una parte de codigo y ejecutar una accion 
const user = {};

user && console.log("Usuario autenticado");





// Modulos de ESC6
// con ESC6 podemos exportar una funcion para despues importarla en otros archivos 
const resultados = add(102,12);
console.log(resultados);

const multiplicar1 = multiplicar(10,5);
console.log(multiplicar1);

const dividir = entre(10,5);
console.log(dividir);

const restar1= restar(100, 35);
console.log(`El resulrado de laresta es: ${restar1}`);