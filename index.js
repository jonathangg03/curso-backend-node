const express = require('express')
const { logErrors, errorHandler } = require('./middlewares/errorHandler')
const routerAPI = require('./routes/index')

const app = express()
const port = 3000

app.use(express.json())

routerAPI(app)

/*
  ? Middlewares: functiones que se ejecutan entre el req y el res
  ? Se colocan despues del routing
  ? El orden en que las coloquemos es el orden en que se llamarán en la ruta
*/
app.use(logErrors)
app.use(errorHandler)

app.listen(port, () => console.log('Listen on port', port))
