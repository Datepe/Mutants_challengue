"use strict"

const { validate, schema, formatResponse} = require("./validations");
const Mutant = require("./mutant");
//let connection;

exports.isMutantsHandler = async (event) => {
    try{
    const res = await validate(schema, event);
    if(res.status == false){
      return formatResponse(404, res.errors)
    }
    const {dna} = event.body;
    const repository = new Mutant();
    for(let item of dna){
      for(let letters of item){
       if(letters != 'A' && letters != 'T' && letters != 'C' && letters != 'G'){
         return formatResponse(404, item, 'Only the following values are allowed in the string (A,T,C,G)')
       }
      }
    }
    const results = await repository.isMutants(dna);
    
   return results.status == 200 ? formatResponse(results.status, dna, results.desc) : results.status == 403 ? formatResponse(results.status, dna, results.desc) : formatResponse(results.status, dna, results.desc) 
   
  
    }catch(error){
      return formatResponse(500, null, 'internal server error')
    }

}