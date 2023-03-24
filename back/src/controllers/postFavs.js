const { favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { id, name, species, gender, status, origin, image } = req.body;
        if(!id || !name || !species || !gender || !status || !origin || !image){
            return res.status(400).json({msg: "Faltan datos."})
        }
        const newFavorite = { id, name, species, gender, status, origin, image };
        const postFavorite = await favorite.create(newFavorite);
        res.status(201).json(postFavorite);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};
module.exports = postFav;