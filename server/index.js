// Pull in Gateway to DB ////////////////////////////////////////////////////////
const gatewayToDB = require('../db/index.js');

// Configure Express ///////////////////////////////////////////////////////////

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// RESTful Routes for CRUD operations //////////////////////////////////////////

// TODO
app.get('/', (req, res) => {
  console.log('req received:', Object.keys(req))
  res.send('hi there') // can add data or headers
  })

app.post('/', (req, res) => {
  console.log('req received:', Object.keys(req))

  res.send('hi there')
  })

// Start & Initialize Web Server ///////////////////////////////////////////////

const port = 3000;
app.listen(port, () => {
  console.log("CRUDdy Todo server is running in the terminal");
  console.log(`To get started, visit: http://localhost:${port}`);
});
