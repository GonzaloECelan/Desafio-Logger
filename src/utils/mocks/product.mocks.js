const {faker} = require('@faker-js/faker')


faker.locale = 'es';

const generateProduct = ()=>{
return {
    title: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number(100),
    categoty: faker.commerce.department(),
    image: faker.image.technics()
}
}

module.exports = {
    generateProduct
}