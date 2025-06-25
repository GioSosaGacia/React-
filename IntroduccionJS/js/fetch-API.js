// fetch api ---> con promesas, proporciona interfaz para recuperar recursos o datos a traves de la red
// similar a XMLHttpRequest y .ajax



const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch es una función integrada en JavaScript que se usa para hacer solicitudes HTTP
// promises tienen stados y pasos con .then(), las apís se comunican con numeros como 200 === ok
// metodos: json y text indican el tipo de dato que estas recibiendo 
fetch(url)
    //recibe la respuesta del servidor, recibiendo el objeto response 
    .then((response) => {
        console.log(response);
        // verifica si el estado fue exitoso 
        if(response.ok){
            // Parsea el cuerpo de la respuesta a formato JSON (esto también es una promesa)
            return response.json();
        }
        throw new Error('Hubo un error...');
    })
    // 	Recibe los datos ya convertidos en objeto JSON
    .then(data =>{
        console.log(data);
    })
    // Atrapa errores de red o errores lanzados manualmente
    .catch(error => {
        console.log(error.message);
    });