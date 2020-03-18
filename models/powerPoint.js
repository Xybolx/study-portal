const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const powerPointSchema = new Schema({

  title: {
      type: String,
      required: true
  },

  url: {
    type: String,
    required: true
},

  date: {
    type: String,
    index: {
      unique: true,
    },
    default: Date.now()
  }

});

const PowerPoint = mongoose.model("PowerPoint", powerPointSchema);


module.exports = PowerPoint;