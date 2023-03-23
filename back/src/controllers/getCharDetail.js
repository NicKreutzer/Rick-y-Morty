
const axios = require("axios");
const URL_BASE = "https://be-a-rym.up.railway.app/api";
const API_KEY = "b13ef727c3c3.981b0d40d54e6c8b2134";

const getCharDetail = async (req, res) => {
  const {detailId} = req.params;
  console.log(detailId)

  try {
    const { data } = await axios.get(`${URL_BASE}/character/${detailId}?key=${API_KEY}`);
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
      status: data.status,
      origin: data.origin?.name,
      location: data.location?.name
  };
}

module.exports = { getCharDetail };


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