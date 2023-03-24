const { Router } = require("express");

var { getCharById } = require("../controllers/getCharById.js");
var { getCharDetail } = require("../controllers/getCharDetail.js");
var { getLocations } = require("../controllers/getLocations.js")
var { addFav, /*getFavs, */deleteFav } = require("../controllers/favController.js");
const postFav = require('../controllers/postFavs');
const getFavs = require('../controllers/getFavs');
//const deleteFav = require('../controllers/deleteFav');

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);
router.get("/location/:id", getLocations)

router.post("/fav", addFav);
// router.post("/fav", postFav); // POST a /favorites
router.get("/fav", getFavs); // GET a /favorites
router.delete("/fav/:id", deleteFav);

module.exports = {router};