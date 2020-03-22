const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const dotenv = require('dotenv');

dotenv.config();

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PW}@omnistack-b89wo.mongodb.net/hunt-api?retryWrites=true&w=majority`,
   { useNewUrlParser: true,
      useUnifiedTopology: true },
   
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000, function() {
  console.log("API online!");
});