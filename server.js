const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const {seedUserData} = require('./models/user.model')
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook
} = require('./controllers/book.controller');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
// seedUserData();

app.get('/',
 function (req, res) { 
  res.send('Hello World') 
})

app.get('/books', getBooks);

app.post('/book', createBook);

app.put('/book/:book_idx', updateBook);

app.delete('/book/:book_idx', deleteBook);

app.listen(PORT);