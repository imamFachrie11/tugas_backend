'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      material.belongsToMany(models.user, {
        through: models.progress,
        foreignKey: "id_material",
        as: "users"
      });
    }
  }
  material.init({
    nama_material: DataTypes.STRING,
    tipe_material: DataTypes.ENUM(
      "video",
      "end quiz",
      "single quiz",
      "summary"
    ),
    exp: DataTypes.INTEGER,
    gold: DataTypes.INTEGER,
    id_sub_bab: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'material',
    underscored: true,
  });
  return material;
};