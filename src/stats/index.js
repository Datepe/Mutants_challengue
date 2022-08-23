"use strict"

const { formatResponse} = require("./validations");
const {getStatsMutant, getStatsHumans} = require("./connectionDB")

exports.statsHandler = async (event) => {
    try{
    const statsMutant = await getStatsMutant()
    return formatResponse(200, statsMutant)
  
    }catch(error){
      return formatResponse(500, null, 'internal server error')
    }

}