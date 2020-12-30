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
app.get('/', (err, results) =>{
  console.log('Hello from the server!');
  res.status(200);
})

app.get('/people', (req, res) => {
  gatewayToDB.queryAsync('SELECT * FROM people')
  .then ((results)=>{
    res.status(200).json(results) // can add data or headers
  })
  .catch((error)=>{
    throw error;
  })
})

app.post('/people', (req, res) => {
  gatewayToDB.queryAsync('INSERT INTO people (name, color) VALUES (?, ?)', [req.body.name, req.body.color])
  .then ((results)=>{
    res.status(201).json(results) // can add data or headers
  })
  .catch((error)=>{
    throw error;
  })
})

// Start & Initialize Web Server ///////////////////////////////////////////////

const port = 5500;
app.listen(port, () => {
  console.log("toyServer is running in the terminal");
  console.log(`To get started, visit: http://localhost:${port}`);
});
