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
