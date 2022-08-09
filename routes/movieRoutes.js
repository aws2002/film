const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('', movieController.displayRandomMovies);
router.get('/results', movieController.searchMovie);

module.exports = router;