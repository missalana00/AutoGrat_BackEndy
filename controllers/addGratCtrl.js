'use strict';
/**
 * Show form that allows user to add a gratitude
 */
console.log('loaded');
module.exports.showAddForm = (req, res, next) => {
  res.render('addgrat');
};
