const Game = require('../models/game');
const asyncHandler = require('express-async-handler');

// Display all game data
exports.all_games_get = asyncHandler(async (req, res, next) => {
  const allGames = await Game.find().sort({ _id: 1 }).exec();
  return res.send(allGames);
});
