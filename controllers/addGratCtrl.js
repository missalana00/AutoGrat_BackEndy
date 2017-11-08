'use strict';
/**
 * Show form that allows user to add a gratitude
 */
module.exports.showAddForm = (req, res, next) => {
  console.log('hi');
  res.render('addgrat');
};

/**
 * Post new gratitude then redirect user to all autoGrats view
 */

module.exports.addGratitude = (req, res, next) => {
  var moment = require('moment');
  let gratsObj = { date_created: moment().format('dddd, MMMM Do YYYY'), message: req.body.gratitude };
  const { Grats } = req.app.get('models');

  Grats.create(gratsObj)
    .then(() => {
      res.redirect('/grats');
    })
    .catch(err => {
      next(err);
    });
};
