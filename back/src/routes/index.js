const { Router } = require("express");

var { getCharById } = require("../controllers/getCharById.js");
var { getCharDetail } = require("../controllers/getCharDetail.js");
var { getLocations } = require("../controllers/getLocations.js")
var { addFav, getFavs, deleteFav } = require("../controllers/favController.js");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);
router.get("/location/:id", getLocations)

router.post("/fav", addFav);
router.get("/fav", getFavs);
router.delete("/fav/:id", deleteFav);

module.exports = {router};