"use strict"

var mysql = require('mysql');
require('dotenv').config();


console.log({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME  
  })
  
var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME  
  });
  


const saveDNAMutants = async (dna, mutant) => {
  return new Promise((resolve, reject) => {
    const stmt = `INSERT INTO mutantes.ADN_mutantes (adn, mutant) VALUES('${dna}', ${mutant});`;
    connection.query(stmt, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

const existsDNA = async (dna) => {
  return new Promise((resolve, reject) => {
    const stmt = `SELECT adn FROM ADN_mutantes WHERE adn = '${dna}'`;
    connection.query(stmt, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}


module.exports = {saveDNAMutants, existsDNA}

 