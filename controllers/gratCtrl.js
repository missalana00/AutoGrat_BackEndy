'use strict';

// const { Grats } = req.app.get('models');

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

// https://stackoverflow.com/questions/42146200/selecting-a-random-record-from-sequelize-findall
module.exports.getRandomGratitude = (req, res, next) => {
  const { Grats } = req.app.get('models');

  Grats.findOne({ order: 'random()' })
    .then(randomGrat => {
      // single random encounter
      console.log('random', randomGrat);
    })
    .catch(err => {
      // console.log('ooops', err);
      next(err);
    });

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
