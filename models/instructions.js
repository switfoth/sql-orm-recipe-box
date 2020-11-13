'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instructions = sequelize.define('Instructions', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER,
    recipeID: DataTypes.INTEGER
  }, {});
  Instructions.associate = function(models) {
  Instructions.belongsTo(models.Recipes, {foreignKey:"recipeId"});
  };
  return Instructions;
};
