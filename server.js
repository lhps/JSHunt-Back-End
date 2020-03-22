const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  'mongodb+srv://admin:admin@omnistack-b89wo.mongodb.net/hunt-api?retryWrites=true&w=majority',
   { useNewUrlParser: true,
      useUnifiedTopology: true },
   
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

server.listen(process.env.PORT || 3000, function() {
  console.log("API online!");
});