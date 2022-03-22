// const faker = require('faker');
const boom = require('@hapi/boom'); //Libreria para manejar mejor el status de erores

class ProductsService {
  constructor() {
    // this.products = [];
    // this.generate(); // we execute generate() in the constructor to generate 100 data form the begining
  }

  // generate() {
  //   const limit = 100;
  //   for (let index = 0; index < limit; index++) {
  //     this.products.push({
  //       id: faker.datatype.uuid(),
  //       name: faker.commerce.productName(),
  //       price: parseInt(faker.commerce.price(), 10),
  //       image: faker.image.imageUrl(),
  //     });
  //   }
  // }

  async create(data) {}

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw boom.notFound('Product not found'); // 404 error
    }

    if (product.isBlock) {
      throw boom.conflict('Product blocked'); // 409 error
    }

    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
  }
}

module.exports = ProductsService;
