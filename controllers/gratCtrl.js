'use strict';

const Sequelize = require('../models').sequelize;

module.exports.getGratitudes = (req, res, next) => {
  const { Grats } = req.app.get('models');

  // change limit later
  Grats.findAll({
    limit: 10,
    order: [['date_created', 'DESC']],
    raw: true
  })
    // Then, take the data, clean it up, and display it
    .then(GratsData => {
      // res.json(LogsData);

      console.log('data', GratsData);
      console.log('data type', typeof GratsData);
      // LogsData = JSON.stringify(LogsData)

      res.render('grats', { page: 'Grats', GratsData });
    })
    // And handle any errors that may occur
    .catch(err => {
      // console.log('ooops', err);
      next(err);
    });
};

// Example from SO
// https://stackoverflow.com/questions/42146200/selecting-a-random-record-from-sequelize-findall
// https://github.com/sequelize/sequelize/issues/3156
module.exports.getRandomGratitude = (req, res, next) => {
  const { Grats } = req.app.get('models');

  Grats.find({
    order: [Sequelize.fn('RANDOM')]
  })
    .then(randomGrat => {
      console.log('random', randomGrat);

      res.json(randomGrat);
    })
    .catch(err => {
      next(err);
    });
};

module.exports.deleteGratitude = (req, res, next) => {
  const { Grats } = req.app.get('models');

  console.log('delete Grat called');
  console.log('id', req.params.id);
  Grats.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.redirect('/grats');
    })
    .catch(err => {
      next(err);
    });
};

module.exports.getSingleGrat = (req, res, next) => {
  const { Grats } = req.app.get('models');

  console.log('single Grat called');
  console.log('id', req.params.id);
  Grats.findOne({ where: { id: req.params.id }, raw: true })
    .then(singleGrat => {
      console.log(singleGrat);
      console.log(typeof singleGrat);
      res.render('displaySingleGrat', { singleGrat });
    })
    .catch(err => {
      next(err);
    });
};
