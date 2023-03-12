
// const axios = require('axios');
// const URL = 'https://rickandmortyapi.com/api/character/';

// function getCharById(req, res) {
//     const params = req.params;
//     const id = params.id;
//     axios.get(`${URL}${id}`)
//         .then(response => {
//       // Si la solicitud se realiza correctamente, se envía una respuesta JSON con la información del personaje
//         const { id, name, species, image, gender } = response.data;
//         const character = { id, name, species, image, gender };
//         res.json(character);
//     })
//     .catch(error => {
//       // Si se produce un error, se envía una respuesta con un status 500 y un mensaje de error en formato JSON
//         console.log(error);
//         res.status(500).json({ message: 'Error al obtener el personaje' });
//     });
// }

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

// Agregamos ASYNC AWAIT
const getCharById = async (req, res) => {
  const params = req.params;

  // axios
  //   .get(`${URL}${params.id}`)
  //   .then(({ data }) => {
  //     const obj = filterData(data);
  //     res.status(200).json(obj);
  //   })
  //   .catch((err) => {
  //     res.status(500).json({ message: err });
  //   });

  try {
    const { data } = await axios.get(`${URL}${params.id}`);
    const obj = filterData(data);
    res.status(200).json(obj);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

function filterData(data) {
    return {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
    };
}

module.exports = { getCharById, filterData, URL };

// const axios = require ('axios');

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let char = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//         }
//         res
//         .writeHead(200, {"Content-type": "application/json"})
//         .end(JSON.stringify(char))
//     })
//     .catch(err => 
//         res
//             .writeHead(500, {"Content-type": "text/plain"})
//             .end(`Character with id: ${id} not found`)
//     )
// };

// module.exports = getCharById