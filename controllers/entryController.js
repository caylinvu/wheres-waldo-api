const Entry = require('../models/entry');
const asyncHandler = require('express-async-handler');

// Display all leaderboard entries
exports.all_entries_get = asyncHandler(async (req, res, next) => {
  const allEntries = await Entry.find().sort({ seconds: 1 }).exec();
  return res.send(allEntries);
});

// Display all leaderboard entries for an individual game
exports.entries_get = asyncHandler(async (req, res, next) => {
  const allEntriesOnGame = await Entry.find({ game: req.params.gameId })
    .sort({ seconds: 1 })
    .exec();
  return res.send(allEntriesOnGame);
});

// Display individual leaderboard post on game
exports.entry_get = asyncHandler(async (req, res, next) => {
  const entry = await Entry.findById(req.params.entryId).exec();
  if (entry.game.toString() === req.params.gameId) {
    return res.send(entry);
  } else {
    const err = new Error('Invalid "gameId" provided in path');
    err.status = 404;
    return next(err);
  }
});

// Create a new leaderboard entry
exports.entry_create = asyncHandler(async (req, res, next) => {
  const entry = new Entry({
    name: req.body.name,
    seconds: req.body.seconds,
    timestamp: new Date(),
    game: req.params.gameId,
  });

  await entry.save();
  return res.send(entry);
});
