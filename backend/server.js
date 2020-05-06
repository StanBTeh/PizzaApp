const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.DB_CONNECTION, {
    dbName: "Pizza",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongo db is successful"))
  .catch((err) =>
    console.log(`Could not Connected to db ${process.env.DB_CONNECTION} `, err)
  );

app.listen(5000, (err) => {
  if (!err) {
    console.log("node server is running");
  }
});

const pizzaRouter = require("./routes/route");
app.use("/route", pizzaRouter);
