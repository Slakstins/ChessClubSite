const mongoose = require("mongoose");

const PerfSchema = new mongoose.Schema({
  venue: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

});

const Perf = mongoose.model("Perf", PerfSchema);

module.exports = Perf;