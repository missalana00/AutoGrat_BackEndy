'use strict';

const { Router } = require('express');
const router = Router();

const { showAddForm } = require('../controllers/addGratCtrl');

// add gratitude (form)
router.get('/addGrat', showAddForm);
// router.post('/addGrat', addGratitude);
