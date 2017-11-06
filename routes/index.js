'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('home');
});

// pipe all other requests through the route modules
router.use(require('./gratsList'));
router.use(require('./addGrat'));
// router.use(require('./editGrat'));
// router.use(require('./foo'));

module.exports = router;
