const Sequelize = require("sequelize")

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id:{
          type:Sequelize.STRING(40),
          allowNull:false,
          primaryKey: true,
        },
        password:{
          type: Sequelize.STRING(100),
          allowNull:false
        },
      },
      {
        sequelize,
        timestamps:false,
        underscored: false,
        modelName: "User",
        tableName: "user",
        paranoid:false,
        charset:"utf8",
        collate:"utf8_general_ci"
      }
    )
  }
  static associate(db){
    db.User
  }
}

module.exports = User;