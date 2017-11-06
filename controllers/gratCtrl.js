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

// module.exports.addGratitude = (req, res, next) => {};
