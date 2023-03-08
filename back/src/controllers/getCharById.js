const axios = require ('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        let char = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
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
};

module.exports = getCharById