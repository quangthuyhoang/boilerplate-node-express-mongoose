const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', product_controller.test);
router.post('/', product_controller.post);
router.put('/', product_controller.put);
router.delete('/', product_controller.delete);

// Example routes
router.get('/product/:id', product_controller.product_find);
router.post('/product/create', product_controller.product_create);
router.put('/product/:id', product_controller.product_update_by_id);




module.exports = router;