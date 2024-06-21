'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bab.belongsTo(models.mata_pelajaran, {
        foreignKey: "id_mata_pelajaran",
        as: "mata_pelajarans"
      });

      bab.hasMany(models.sub_bab, {
        foreignKey: "id_bab",
        as: "sub_babs"
      });
    }
  }
  bab.init({
    nama_bab: DataTypes.STRING,
    label_sub_bab_gratis: DataTypes.STRING,
    progress_bar: DataTypes.STRING,
    id_mata_pelajaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bab',
    underscored: true,
  });
  return bab;
};