const { Model, DataTypes } = require('sequelize');

class Users extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize
    });
  }
}

module.exports = Users;