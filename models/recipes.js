'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    title: DataTypes.STRING
  }, {});
  Recipes.associate = function(models) {
  Recipes.hasMany(models.Ingredients, {foreignKey: "recipeId"})
  };
  return Recipes;
};
