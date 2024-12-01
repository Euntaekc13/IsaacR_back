const Sequelize = require("sequelize")


class Machine3 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        time:{
          type: Sequelize.DATE(6),
          allowNull:false
        },
        T1:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T2:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T3:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T4:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T5:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T6:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T7:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T8:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T9:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T10:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T11:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T12:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T13:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T14:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        T15:{
          type:Sequelize.INTEGER(3),
          allowNull:false,
        },
        pump:{
          type: Sequelize.INTEGER(1),
          allowNull:false
        },
        heater:{
          type: Sequelize.INTEGER(1),
          allowNull:false
        },
        sole_noid:{
          type: Sequelize.INTEGER(1),
          allowNull:false
        },
        flowrate:{
          type: Sequelize.FLOAT(10),
          allowNull:false
        },
        H_flowrate:{
          type: Sequelize.FLOAT(10),
          allowNull:false
        },
        solarRadiat:{
          type: Sequelize.INTEGER(6),
          allowNull:false
        },
      },
      {
        sequelize,
        timestamps:false,
        underscored: false,
        modelName: "Machine3",
        tableName: "Machine3",
        paranoid:false,
        charset:"utf8",
        collate:"utf8_general_ci"
      }
    )
  }
  static associate(db){
    db.Machine3
  }
}
module.exports = Machine3;