const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
  crust: String,
  size: String,
});

module.exports = mongoose.model("Pizza", PizzaSchema);
