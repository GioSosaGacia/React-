// console.log("Hola mundo");

let name1 = "Giovanni";
const lastname = "Sosa";
// console.log(name1 + " " + lastname);

// Tipos de datos: 
/*
Undefine there is a variable but doesn´t have value
String can be generate with double or single quotes 
Number 
BigInt is a large number 
Boolean true or false 
Null es un valor que no existe o no es nada 
Symbol 
*/

/*
Objetos: Son una coleccion de propiedades, y una propiedad es una asociacion entre una clave y un valor: key;"value", puede almacenar multiples valores en una sola variable 
*/
const producto = {
    nombre: "Table",
    precio: 1500,
    disponible: false,
    imagen: " "
}

console.log(producto);
console.log( typeof(producto));
console.table(producto);

// Podemos acceder a las propiedades de un objeto 
// console.log(producto.nombre)
// destructuring se usa para extraer valores de un objeto 
const { nombre, precio, disponible,imagen } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);


// Object Literal Enhancement sirve para colocar variables dentro de un objeto
const autenticado = true;
const usuario = "Juan";

const newObject = {
    // Cuando el key y value tiene el mismo nombre se puede omitir el key o values y el resultado será el mismo 
    autenticado,
    usuario: usuario
}

console.log(newObject);

// Con object.freeze bloqueamos la posibilidad de modificar un objeto
Object.freeze(producto);
// No permite modificar ni eliminar las propiedades de un objeto
Object.seal(producto); 

// Manipulacion de objetos, podemos modificar, agregar o eliminar un objeto de la siguiente manera;
producto.nombre = "Audifonos";
producto.imagen = "imagen";
// delete producto.precio;
console.log("Hola" + " " + producto.nombre, producto.imagen);

// Destructuring de objetos de 2 o mas objetos 
const ford = {
    marca: "Mustang",
    motor: "V8",
    color: "Rojo"
}

const honda = {
    marca: "Civic",
    motor: "4 cilindros",
    transmisones: {
        standar: "6 velicidades",
        standar: "5 velocidades",
        automatica: "5 velocidades",
        cvt: "5 velocidades"
    }
}

const { marca } = ford
//Con los dos: podemos renombrar la variable para que no marque error y cuando tenemos un objeto dentro de otro objeto usamos las {} para acceder a su valor.
const { marca: marcaHonda, transmisones: {automatica}} = honda

console.log(marca);
console.log(marcaHonda);
console.log(automatica);

// Unir dos o mas objetos:usando el spread operator
const carrito = {
    cantidad: 1,
    ...ford
}

console.log(carrito);
