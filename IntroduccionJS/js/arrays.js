// map 

const tecnologias = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Django',
  'PostgreSQL',
  'Docker',
  'Git',
  'GraphQL',
  'Next.js',
  'Tailwind CSS'
];

// filter una forma
// const tech = (tech) => console.log(tech);
// const resultado = tecnologias.filter(tech) 

// otra forma 
const nuevo = tecnologias.filter((tech1) => console.log(tech1));

const nuevo1 = tecnologias.filter((tech1) => tech1 !== "JavaScript" && tech1 !== "Django");
console.log(nuevo1);

// Si quieres filtras mas de un elemento se puede usar include revisa si existe un elemento en un arreglo
const nuevo2 = tecnologias.filter((tech2) => tech2 === "JavaScript");
console.log(nuevo2);

// include revisa si existe un elemento en un arreglo, retorna true o false
const nuevo3 = tecnologias.includes("PostgreSQL");
console.log(nuevo3);

// same ->  tests whether at least one element in the array passes
const nuevo4 = tecnologias.some( tecnologia => tecnologia = "Git");
console.log(nuevo4);

// returns the first element in the provided array that satisfies the provided testing function.
const nuevo5 = tecnologias.find( tecnologia => tecnologia === "Git");
console.log(nuevo5);



// Operador ternario  codición  ? SI cumple :No cumple, tambien se puede usar un if ternario...
const auth = false
const saldo = 120;
const pagar = 900;
const tarjeta = true;

auth ? console.log("Autenticado") : console.log("No autenticado");

saldo > pagar || tarjeta ? console.log("Puedes pagar") : console.log("No puedes pagar");

// saldo > pagar ? console.log("Puedes pagar"):
//         tarjeta ? console.log("Si puedes pagar on tarjeta") : console.log("No puedes pagar");