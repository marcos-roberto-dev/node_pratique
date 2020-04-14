const express = require('express');
const userRoutes = require('./routes/userRoutes');

class App {
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(userRoutes);
  }
}

module.exports = new App().server;