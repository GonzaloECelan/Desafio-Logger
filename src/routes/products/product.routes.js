const {Router} = require('express');
const {ProductControllers} = require('../../controllers/product.controllers')

const router = Router();


// rutas para testear con mocks
router.post('/mockingproducts',ProductControllers.createProductMocks)
router.get('/mockingproducts',ProductControllers.getProductMocks);

router.get('/home',ProductControllers.getAll);
router.get('/:id',ProductControllers.getById);
router.post('/add',ProductControllers.createProduct);
router.put('/:id',ProductControllers.upDateProduct);
router.delete('/delete/:id',ProductControllers.deleteProduct);

module.exports = router;