// Template string y concatenación 
const producto1 = "Air Jordan";
const precio1 = 500;
const modelo1 = "Electron";

console.log(`El costo de los tenis: ${producto1} tiene un costo de: ${precio1} ya que el modelo es: ${modelo1}`)
console.log("Hola desde  template str");

// arrays
const lenguajes = ["HTML", "React", "CSS", "Tailwind", "Remix", "Next.js"];
// lenguajes[5] = "Django"
// console.table(lenguajes);
// lenguajes.push("JavaScript");
// console.table(lenguajes);

const nuevoArreglo = [...lenguajes, "Next.jsx"];
console.log(nuevoArreglo);

// // metodos de array shift() elimina el primer elemento de un array, shift muta el arreglo 
nuevoArreglo.shift();
// console.table(nuevoArreglo);

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
// console.log(tecnologias);





// this is the same to destructuring we GET THE SAME VAKUE 
const react = tecnologias[2];
// console.log(react);

// With the destructuring we can access to a specific values, we use , for skip values in this case we can access to element 3
const [, , css] = tecnologias;
// console.log(css);



// iterate an array using for loop
// for(let i = 0; i < tecnologias.length; i++){
//     console.log(tecnologias[i]);
// } 


// foreach recupera un array y ejecuta una funcion por cada elemento de un arreglo
tecnologias.forEach(function(tech){
    console.log(tech);
})

const numeros = [10, 20, 30];

numeros.forEach((numero, i) => {
  console.log(`Índice ${i}: ${numero}`);
});

// map es como el forEache pero a este se le puede agregar una condicion, ademas genera un nuevo arreglo
numeros.map((numero, i) => {
  console.log(`Índice ${i}: ${numero}`);
});

// for of
for(let tech of tecnologias){
    console.log(tech);
}