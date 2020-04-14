const express = require("express");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use([
      userRouter, 
      productRouter
    ]);
  }
}



module.exports = new App().server;
