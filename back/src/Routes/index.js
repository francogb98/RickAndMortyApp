const { Router } = require("express");
const { Favorite } = require("../DB_connection");
const getCharDetail = require("../Controllers/getCharDetail");
const getCharById = require("../Controllers/getCharById");
const deleteFav = require("../Controllers/deleteFav");
// const postUser = require("../Controllers/deleteFav");
const login = require("../Controllers/login");
const postFav = require("../Controllers/postFav");
const postUser = require("../Controllers/postUser");
const getFav = require("../Controllers/getFav");

const router = Router();

router.post("/login", postUser);
router.get("/login", login);

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/fav", postFav);
router.get("/fav", getFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
