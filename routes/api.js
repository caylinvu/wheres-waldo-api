const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const entryController = require('../controllers/entryController');
const imgController = require('../controllers/imgController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Where's Waldo API" });
});

/* ~~~~~~~~~~GAMES~~~~~~~~~~ */

// GET all game data
router.get('/games', gameController.all_games_get);

// GET individual game data
router.get('/games/:gameId', gameController.game_get);

/* ~~~~~~~~~~LEADERBOARD ENTRIES~~~~~~~~~~ */

// GET all leaderboard entries
router.get('/entries', entryController.all_entries_get);

// GET leaderboard entries for an individual game
router.get('/games/:gameId/entries', entryController.entries_get);

// GET individual leaderboard entry on a game
router.get('/games/:gameId/entries/:entryId', entryController.entry_get);

// POST new leaderboard entry
router.post('/games/:gameId/entries', entryController.entry_create);

/* ~~~~~~~~~~IMAGES~~~~~~~~~~ */

// GET game image
router.get('/img/games/:gameId', imgController.game_img_get);

// GET item image
router.get('/img/items/:itemId', imgController.item_img_get);

module.exports = router;
