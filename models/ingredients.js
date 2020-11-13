'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define('Ingredients', {
    amount: DataTypes.NUMERIC,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredients.associate = function(models) {
  Ingredients.hasOne(models.Recipe, {foreignKey: 'id'});
  Ingredients.hasOne(models.MeasurementUnit, {foreignKey: 'id'});
  };
  return Ingredients;
};
