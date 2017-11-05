'use strict';

const { Router } = require('express');
const router = Router();

const { getGratitudes } = require('../controllers/gratCtrl');

// router.get('/home', getHomeProducts);
router.get('/grats', getGratitudes);
// router.get('/products/:id', getSelectedProduct);
// router.get('/categories', getProductCats);
// router.get('/categories/:id', getSelectedCat);
// router.post('/search', searchProducts);

module.exports = router;
