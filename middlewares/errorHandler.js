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

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    // Sí el error es de tipo boom
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err) // Sí no es un error boom, ejecutará el siguiente mid tipo error
}

module.exports = { logErrors, errorHandler }
