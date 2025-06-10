// Template string y concatenación 
const producto1 = "Air Jordan";
const precio1 = 500;
const modelo1 = "Electron";

console.log(`El costo de los tenis: ${producto1} tiene un costo de: ${precio} ya que el modelo es: ${modelo1}`)
console.log("Hola desde  template str");

// arrays
const lenguajes = ["HTML", "React", "CSS", "Tailwind", "Remix", "Next.js"];
// lenguajes[5] = "Django"
// console.table(lenguajes);
// lenguajes.push("JavaScript");
// console.table(lenguajes);

const nuevoArreglo = [...lenguajes, "Next.js"];
console.log(nuevoArreglo);

// // metodos de array shift() elimina el primer elemento de un array, shift muta el arreglo 
nuevoArreglo.shift();
console.table(nuevoArreglo);

// const tecnologias = lenguajes.filter(function(tech){
//     if(tech !== "HTML"){
//         return tech;
//     }
// })


// Map itera sobre todos los elementos y firlter(Si cumple x condicio retorna x parametro) no mutan el arreglo
const tecnologias = lenguajes.map(function(tech){
    if(tech === "Next.js"){
        return "Node.js";
    }else{
        return tech;
    }
})
console.log(tecnologias);