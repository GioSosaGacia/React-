// fetch api ---> con promesas, proporciona interfaz para recuperar recursos o datos a traves de la red
// similar a XMLHttpRequest y .ajax
// Puede ser usado con funcion o sin función 



const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch es una función integrada en JavaScript que se usa para hacer solicitudes HTTP
// promises tienen stados y pasos con .then(), las apís se comunican con numeros como 200 === ok
// metodos: json y text indican el tipo de dato que estas recibiendo 
// fetch(url)
    //recibe la respuesta del servidor, recibiendo el objeto response, un then varia mucho de la conexion de intenet para obtener los datos 

    // .then((response) => {
    //     console.log(response);
    //     // verifica si el estado fue exitoso 
    //     if(response.ok){
    //         // Parsea el cuerpo de la respuesta a formato JSON (esto también es una promesa)
    //         return response.json();
    //     }
    //     throw new Error('Hubo un error...');
    // })
    // // 	Recibe los datos ya convertidos en objeto JSON
    // .then(data =>{
    //     console.log(data);
    // })
    // // Atrapa errores de red o errores lanzados manualmente
    // .catch(error => {
    //     console.log(error.message);
    // });





// fetch API CON promises async await si requiere del uso de una funcion y puede ser una arrow => fuction o una fuction declaration
// aqui el then se remplaza por el await espera a que se ejecute el codigo para ir a la siguiente linea y se lee de derecha a izquierda 
 
const  consultarAPI = async () => {
    try{
        // intenta conectarse a la url, espera la respuesta 
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Hubo un error...')
        }
        // retorna la respuesta como json se lee de derecha a izquierda 
        const data = await response.json();
        console.log("Hola:",data);
    } catch (error){
        // con message podemos acceder al error 
        console.log(error.message);
    }
}

consultarAPI();