const Game = require('../models/game');
const asyncHandler = require('express-async-handler');

// Display all game data
exports.all_games_get = asyncHandler(async (req, res, next) => {
  const allGames = await Game.find().sort({ key: 1 }).exec();
  return res.send(allGames);
});

// Display individual game data
exports.game_get = asyncHandler(async (req, res, next) => {
  const game = await Game.findById(req.params.gameId).exec();
  return res.send(game);
});
