
const axios = require("axios");

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const API_KEY = "b13ef727c3c3.981b0d40d54e6c8b2134";

const getCharById = async (req, res) => {
  const {id} = req.params;
  try {
    const { data } = await axios.get(`${URL_BASE}/character/${id}?key=${API_KEY}`);
    const obj = filterData(data);
    console.log(obj)
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

module.exports = { getCharById };


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