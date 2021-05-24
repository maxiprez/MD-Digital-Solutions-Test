const url = 'https://rickandmortyapi.com/api/character'

// Llamada desde fetch a la url
    fetch(url)
    .then(res => res.json()) //Promesa
    .then(data => mostrarData(data)) //Devuelve la promesa
    .catch(err => console.log(err)) //Devuelve error por consola

    const mostrarData = (data) => {
        console.log(data.results) //Para test
        let body = ''
        
// Defino ciclo for para que pinte en la tabla c/u de los items
        for ( let i = 0; i<data.results.length; i++){
                body += `
                <tr>
                    <td>${data.results[i].id}</td>
                    <td>${data.results[i].name}</td>
                    <td>${data.results[i].status}</td>
                    <td>${data.results[i].species}</td>
                    <td>${data.results[i].gender}</td>
                    <td>${data.results[i].created}</td>
                
                </tr> `
        }   
        document.getElementById('data').innerHTML = body
    }
        
