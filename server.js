const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
app.listen(PORT) // kick start the express server to work
