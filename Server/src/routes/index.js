const express = require('express');
const getCharById = require('../controllers/getCharById');
//const { postFav, deleteFav } = require('../controllers/handleFavorites');
const {postFav, getFav } = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const login = require('../utils/login');
const postUser = require('../controllers/postUser');


const router = express.Router();


router.get('/character/:id', getCharById);
router.get('/login', login);
router.get('/fav', getFav);
router.post('/login', postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;


