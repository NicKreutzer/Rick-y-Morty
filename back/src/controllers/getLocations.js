
const axios = require("axios");

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const API_KEY = "b13ef727c3c3.981b0d40d54e6c8b2134";

const getLocations = async (req, res) => {
    const {id} = req.params;

    try { 
        const { data } = await axios.get(`${URL_BASE}/location/${id}?key=${API_KEY}`); 
        const obj = filterData(data);
        res.status(200).json(obj);
    } catch (error){
        res.status(500).json({ message: error});
    }
};

function filterData(data) {
    return {
        id: data.id,
        name: data.name,
        type: data.type,
        dimension: data.dimension,
    }
};

module.exports = {getLocations};