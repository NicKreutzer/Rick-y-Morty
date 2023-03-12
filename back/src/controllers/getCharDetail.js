
var axios = require("axios");
const { filterData, URL } = require("./getCharById.js");

// Agregamos ASYNC AWAIT
const getCharDetail = async (req, res) => {
  const params = req.params;

  // axios
  //   .get(`${URL}${params.id}`)
  //   .then(({ data }) => {
  //     const obj = filterData(data);
  //     res.status(200).json({ ...obj, status: data.status, origin: data.origin });
  //   })
  //   .catch((err) => {
  //     res.status(500).json({ message: err });
  //   });

  try {
    const { data } = await axios.get(`${URL}${params.id}`);
    const obj = filterData(data);
    res.status(200).json({ ...obj, status: data.status, origin: data.origin });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getCharDetail };

// const url = "https://rickandmortyapi.com/api/character/";

// function getCharDetail(req, res) {
//     const charId = req.params.id;

//     axios.get(url + charId)
//     .then((response) => {
//         const { id, name, species, image, gender } = response.data;
//         axios.get(response.data.origin.url)
//         .then((originResponse) => {
//             const origin = originResponse.data.name;
//             res.json({ id, name, species, image, gender, origin });
//         })
//         .catch((error) => {
//             res.status(500).json({ message: "Error al obtener información de ubicación" });
//         });
//     })
//     .catch((error) => {
//         res.status(500).json({ message: "Error al obtener información de personaje" });
//     });
// }

// module.exports = { getCharDetail };

// const axios = require ('axios');


// const getCharDetail = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let char = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             type: data.type,
//             origin: data.origin.name,
//             location: data.location.name,
//             status: data.status
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
// }

// module.exports = getCharDetail;