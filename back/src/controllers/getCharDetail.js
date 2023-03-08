const axios = require ('axios');


const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        let char = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            type: data.type,
            origin: data.origin.name,
            location: data.location.name,
            status: data.status
        }
        res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(char))
    })
    .catch(err => 
        res
            .writeHead(500, {"Content-type": "text/plain"})
            .end(`Character with id: ${id} not found`)
    )
}

module.exports = getCharDetail;