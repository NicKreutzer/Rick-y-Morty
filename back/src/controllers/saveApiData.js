const axios = require('axios');
const { character } = require('../DB_connection')

const getApiData = async () => {
    try {
        let characters = [];
        for (let i = 1; i < 6; i++) {
            let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            const pageChar = apiData.data.results.map((char) => {
                return{
                    id: char.id,
                    name: char.name,
                    species: char.species,
                    status: char.status,
                    origin: char.origin?.name,
                    gender: char.gender,
                    image: char.image,
                    location: char.location?.name,
                };
            }); 
            characters = [...characters, ...pageChar];
        }
        return characters;
    } catch (error) {
        return { msg: error.message };
    }
};

const saveApiData = async () => {
    try {
        const characters = await getApiData();
        await character.bulkCreate(characters);
        return characters;
    } catch (error) {
        return { msg: error.message };
    }
};

module.exports = saveApiData;