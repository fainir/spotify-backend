'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Song, {
        foreignKey: 'artistId',
        as: 'songs',
      });
    }
  };
  Artist.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.STRING,
      field: 'phone_number'
    },
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};