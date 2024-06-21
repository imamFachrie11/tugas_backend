'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sub_bab.belongsTo(models.bab, {
        foreignKey: "id_bab",
        as: "babs"
      });

     sub_bab.hasMany(models.material, {
        foreignKey: "id_sub_bab",
        as: "materials"
      });
    }
  }
  sub_bab.init({
    nama_sub_bab: DataTypes.STRING,
    lebel_gratis: DataTypes.BOOLEAN,
    id_bab: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sub_bab',
    underscored: true,
  });
  return sub_bab;
};