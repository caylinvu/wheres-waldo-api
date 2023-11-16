const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: { type: String, required: true },
  imgURL: { type: String, required: true },
  items: {
    type: [
      {
        name: { type: String, required: true },
        imgURL: { type: String, required: true },
        coords: {
          type: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
            _id: false,
          },
        },
        _id: false,
      },
    ],
  },
  _id: { type: Number, required: true },
});

module.exports = mongoose.model('Game', GameSchema);
