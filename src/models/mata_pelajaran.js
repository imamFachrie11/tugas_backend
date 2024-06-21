'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mata_pelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mata_pelajaran.belongsTo(models.mode_pembelajaran, {
        foreignKey: "id_mode_pembelajaran",
        as: "mode_pembelajarans"
      });

      mata_pelajaran.hasMany(models.bab, {
        foreignKey: "id_mata_pelajarans",
        as: "babs"
      });
    }
  }
  mata_pelajaran.init({
    nama_mata_pembelajaran: DataTypes.STRING,
    id_mode_pembelajaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mata_pelajaran',
    underscored: true,
  });
  return mata_pelajaran;
};