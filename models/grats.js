'use strict';
module.exports = (sequelize, DataTypes) => {
  var Grats = sequelize.define(
    'Grats',
    {
      date_created: DataTypes.STRING,
      message: DataTypes.STRING
    },
    { timestamps: false }
  );
  return Grats;
};
