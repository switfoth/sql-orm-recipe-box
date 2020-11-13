'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    title: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:true,
      },
    },
  },);
  Recipes.associate = function(models) {
  Recipes.hasMany(models.Ingredients, {foreignKey: "recipeId"})
  Recipes.hasMany(models.Instructions, {foreignKey:"recipeID"})
  };
  return Recipes;
};
