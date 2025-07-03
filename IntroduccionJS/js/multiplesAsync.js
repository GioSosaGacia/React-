

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

// const  consultarAPI = async () => {
    // se usa con try:catch para cachar posibles errores 
//     try{
//         // para medir el rendieminto de la peticion:
//         const inicio = performance.now()
        
//         const response = await fetch(url);
//         if(!response.ok) {
//             throw new Error('Hubo un error...')
//         }
//         const data = await response.json()
//         console.log("Hola:",data);

//         const fin = performance.now()
//         console.log(`El resultado es; ${fin - inicio} ms.`)
//     } catch (error){
//         // con message podemos acceder al error 
//         console.log(error.message);
//     }
// }

// consultarAPI();



// leer multiples peticiones 

const consultarAPI = async () => {
    try{
        // de esta manera es mas lenta ya que para mostrar el resultado se espera a que termine de leer cad auna de las peticiones para mostrar el resultado de las 3 primero hace 1,2 y al ultimo la tercera 
        const inicio = performance.now();
        
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        const response1 = await fetch(url2);
        const data1 = await response1.json();
        console.log(data1);
        
        const response2 = await fetch(url3);
        const data2 = await response2.json();
        console.log(data2);

        const fin = performance.now();
        console.log(`Resultado de la primera funcion es: ${fin - inicio}`);
    }catch(error){
        console.log(error.message);
    }
}
consultarAPI();




// Otra forma de hacerlo: es colocando todo dentro de un Promise O Promise.all([])
const consultarAPI2 = async () => {
    try{
        // de esta manera es mas lenta ya que para mostrar el resultado se espera a que termine de leer cad auna de las peticiones para mostrar el resultado de las 3 primero hace 1,2 y al ultimo la tercera 
        const inicio = performance.now();

        // de esta manera se inician los fetch al mismo tiempo, no como en el ejempl anterios que inicia uno y lo termina para despues pasar al siguiente
        // Promise.all()--> hace toda las peticiones en paralelo
        const [response, response1, response2] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);
        const [data, data1, data2] = await Promise.all([response.json(), response1.json(), response2.json()]);

        console.log(data);
        console.log(data1);
        console.log(data2);
        
        const fin = performance.now();
        console.log(`Resultado de la segunda función es: ${fin - inicio}`);
    }catch(error){
        console.log(error.message);
    }
}
consultarAPI2();