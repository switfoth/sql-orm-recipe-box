'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instructions = sequelize.define('Instructions', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER,
    recipeID: DataTypes.INTEGER
  }, {});
  Instructions.associate = function(models) {
    // associations can be defined here
  };
  return Instructions;
};