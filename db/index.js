/***************************************/
/********* Pull in Dependencies ********/
/***************************************/
const mysql = require('mysql');
const Promise = require('bluebird');

const database = 'peopleDB';
const tableName = 'people';


/***************************************/
/******** Setup Connection to DB *******/
/***************************************/
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Watterson2!',
});

// This will promisify the MySQL library
const gatewayToDB = Promise.promisifyAll(connection, { multiArgs: true });


/***************************************/
/*** Connect to DB and format tables ***/
/***************************************/
gatewayToDB.connectAsync()
  .then((dbResponse) => console.log(`Connected to mySQL and ${database} database!`))
  .then((dbResponse) => gatewayToDB.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then((dbResponse) => gatewayToDB.queryAsync(`USE ${database}`))
  .then((dbResponse) => gatewayToDB.queryAsync(
              `CREATE TABLE IF NOT EXISTS ${tableName} (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) UNIQUE,
                color VARCHAR(280)
              );`
  ))
  .then((dbResponse) => {
    console.log(`Successfully created ${tableName} table!`);
  })
  .catch((err) => {
    console.log('\n\nError occured connecting to DB: ', err)
  });

module.exports = gatewayToDB;