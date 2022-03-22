const boom = require('@hapi/boom');

/*
  ? validatorHandler is a dynamic middleware, because it has other arguments besides req, res and next
  ? to make this, we use a closure, a function that returns another
  ? the internal function has req, res, and next, and the external, has the arguments that
  ? the middleware need to work, or in this case, do the validations
  ? At the end, the middleweres  need to execute next
*/

//this middleware cant run in a generic way, because there is no way to run these in a generic way on the index, so will run on each endpoin/route
function validatorHandler(schema, property) {
  //property is the prop of req that will contains the data
  return (req, res, next) => {
    const data = req[property]; //this will call req.body, params, or what property we want from req
    const { error } = schema.validate(data); //validate is a method of a schema created with joi
    if (error) {
      //if there is an error, we call the error middlewares, and give them a boom error
      next(boom.badRequest(error)); // 400 error
    }

    next(); //if everything´s ok, we just call next middleware
  };
}

module.exports = validatorHandler;
