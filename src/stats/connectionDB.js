"use strict"

var mysql = require('mysql');
require('dotenv').config();


var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME  
  });
  


const getStatsMutant = async (dna, mutant) => {
  return new Promise((resolve, reject) => {
    const stmt = `SELECT COUNT(*) FROM ADN_mutantes am WHERE mutant = 1;`;
    console.log(stmt)
    connection.query(stmt, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

const getStatsHumans = async (dna, mutant) => {
    return new Promise((resolve, reject) => {
      const stmt = `SELECT COUNT(*) FROM ADN_mutantes am WHERE mutant = 0;`;
      console.log(stmt)
      connection.query(stmt, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }



module.exports = {getStatsMutant, getStatsHumans}

 