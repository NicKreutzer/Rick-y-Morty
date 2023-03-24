const { favorite } = require('../DB_connection');

const getFavs = async (req, res) => {
    try {
        const allFavorites = await favorite.findAll();
        res.status(200).json(allFavorites);
    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
};

module.exports = getFavs;