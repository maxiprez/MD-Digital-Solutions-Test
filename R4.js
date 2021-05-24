const url = 'https://rickandmortyapi.com/api/character'

    fetch(url)
    .then(res => res.json())
    .then(data => mostrarData(data))
    .catch(err => console.log(err))

    const mostrarData = (data) => {
        console.log(data.results) //Para test
        let body = ''

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
        
