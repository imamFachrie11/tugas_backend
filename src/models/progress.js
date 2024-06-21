'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      progress.belongsTo(models.material, {
        foreignKey: "id_material",
        as: "materials"
      });
      progress.belongsTo(models.user, {
        foreignKey: "id_user",
        as: "users",
      });

      
    }
  }
  progress.init({
    id_material: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    status_progress: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'progress',
    underscored: true,
  });
  return progress;
};