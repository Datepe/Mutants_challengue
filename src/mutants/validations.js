const Ajv = require("ajv")
const ajv = new Ajv()

const schema = {
    title: "mutants",
    type: "object",
    properties: {
        body:{
          type: "object",
          properties:{
              dna: {
                  type: "array",
                  items: {type: "string"}
              }
            },
          required: ['dna']
        }
    }
}

const validate = async (schema, event) => {
    event.body = JSON.parse(event.body);
    const validate = ajv.compile(schema)
    const valid = validate(event)
    if (!valid) {
      const errors = [];
      for (const { message, instancePath: field } of validate.errors) {
        errors.push({ message, field });
      }
      return { status: false, errors: errors };
    }
    return { status: true };
};

const formatResponse = (status,data, description) =>{
    const body = {
        statusCode: status,
        description: description, 
        adn: data
    }
     const  response = {
    isBase64Encoded: false,
    statusCode: status,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }; 
  
  return response;
}


  module.exports = { validate, schema, formatResponse};