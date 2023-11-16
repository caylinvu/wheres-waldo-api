const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Where's Waldo API" });
});

// GET all game data
router.get('/games', gameController.all_games_get);

// GET individual game data
// router.get('/games/gameId', gameController.game_get);

// GET all leaderboard entries ******
// router.get('/entries', entryController.all_entries_get);

// GET leaderboard entries for an individual game
// router.get('/games/gameId/entries', entryController.entries_get);

// GET individual leaderboard entry on a game
// router.get('/games/gameId/entries/entryId', entryController.entry_get);

// POST new leaderboard entry ******
// router.post('/games/gameId/entries', entryController.entry_create);

module.exports = router;
