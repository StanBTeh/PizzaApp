const express = require("express");
const pizzaRouter = express.Router();
const Pizza = require("../models/Pizza");

//read from db
pizzaRouter.get("/", (req, res) => {
  Pizza.find()
    .then((pizzas) => res.json(pizzas))
    .catch((err) => res.status(400).json("Error:" + err));
});

pizzaRouter.post("/add", async (req, res) => {
  try {
    const pizza = new Pizza(req.body);
    console.log("saving pizza...");
    await pizza.save();
    res.send(pizza);
  } catch (err) {
    console.log("error: " + err);
    res.send({ message: err });
  }
});

module.exports = pizzaRouter;
