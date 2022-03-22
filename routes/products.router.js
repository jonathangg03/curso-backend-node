const express = require('express');

const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/product.schema');
const validatorHandler = require('../middlewares/validationHandler');

router.get('/', async (req, res) => {});

router.get('/filter', (req, res) => {});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'), //on the endpoints, middlewares goes before the last function, where we use the info
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error); //Indicamos explicitamente que ejecute los mid de tipo error
    }
  }
);

router.post('/', async (req, res) => {});

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'), //Validate the id
  validatorHandler(updateProductSchema, 'body'), //Validate the data in body
  async (req, res) => {}
);

router.delete('/:id', async (req, res) => {});

module.exports = router;
