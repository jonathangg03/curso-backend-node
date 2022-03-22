/* 
  ? In this example, if there was an error in a route, in the catch block we have to execute next() and pass the error as an argument
  ? This will execute logErrors, because it is the first middleware in index.js, we excecute next() with the error again, cause this
  ? will execute the next middleware in order, and this second one will have the error too.
*/

function logErrors(err, req, res, next) {
  console.error(error)
  next(err)
  //Sí no le enviamos nada, sera un midd normal
  //A los de error siempre le pasamos el error en el next
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
  //Sí envia una respuesta, el next no es necesario
}

function boomErrorHandler(err, req, res, next) { // We have to create this middleware, because boom works this way
  if (err.isBoom) {
    // we have to validate that the error is an boom error type
    const { output } = err //In output is the information about the error
    res.status(output.statusCode).json(output.payload) //We are responding with this info
  }
  next(err) // Sí no es un error boom, ejecutará el siguiente mid tipo error
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
