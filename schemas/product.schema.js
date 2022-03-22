const Joi = require('joi'); //library for validation data

const id = Joi.string().uuid(); //First we define the type or structure of the element: First the type, and then some options
// const name = Joi.string().alphanum().min(3).max(15); //Alphanum only accepts strings with numbers and letters
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

//When the type is alphanum, min and max are about liength, in number, min and max are about value

//Now, we have to create the schemas to validate data on every method

const createProductSchema = Joi.object({
  //Here we define what data are required
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
