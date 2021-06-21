const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const seedUserData = require('./models/user.model')
const bookController = require('./controllers/book.controller')

mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
seedUserData();

app.get('/',
 function (req, res) { 
  res.send('Hello World') 
})
app.get('/books', bookController);
app.listen(PORT);