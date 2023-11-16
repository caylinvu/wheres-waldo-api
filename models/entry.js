const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  name: { type: String, required: true },
  gameTime: { type: Number, required: true },
  timestamp: { type: Date, required: true },
  game: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
});

module.exports = mongoose.model('Entry', EntrySchema);
