const express = require('express')

const ProductsService = require('./../services/product.service')

const router = express.Router()
const service = new ProductsService()

router.get('/', async (req, res) => {})

router.get('/filter', (req, res) => {})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error) //Indicamos explicitamente que ejecute los mid de tipo error
  }
})

router.post('/', async (req, res) => {})

router.patch('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

module.exports = router
