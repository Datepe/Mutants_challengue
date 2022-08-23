const formatResponse = (status,data, description) =>{
    const body = {
        statusCode: status,
        description: description, 
        data: data
    }
     const  response = {
    isBase64Encoded: false,
    statusCode: status,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }; 
  
  return response;
}


  module.exports = { formatResponse};