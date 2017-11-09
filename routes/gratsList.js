'use strict';

const { Router } = require('express');
const router = Router();

const { getGratitudes, deleteGratitude, getRandomGratitude, getSingleGrat } = require('../controllers/gratCtrl');

// router.get('/home', getHomeProducts);
router.get('/grats', getGratitudes);
// router.get('/products/:id', getSelectedProduct);
// router.get('/categories', getProductCats);
// router.get('/categories/:id', getSelectedCat);
// router.post('/search', searchProducts);

// router.post('/delete/:id', deleteGratitude);
router.get('/delete/:id', deleteGratitude);

router.get('/random', getRandomGratitude);

router.get('/grats/:id', getSingleGrat);

module.exports = router;
