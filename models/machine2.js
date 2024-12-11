const Sequelize = require("sequelize")

class Machine2 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        createAt:{
          type: Sequelize.DATE,
          allowNull:true,
          defaultValue:Sequelize.NOW
        },
        T1:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T2:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T3:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T4:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T5:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T9:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T10:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T11:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T12:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        T13:{
          type:Sequelize.INTEGER(3),
          allowNull:true,
        },
        pump:{
          type: Sequelize.INTEGER(3),
          allowNull:true
        },
        heater:{
          type: Sequelize.INTEGER(1),
          allowNull:true
        },
        sole_noid:{
          type: Sequelize.INTEGER(1),
          allowNull:true
        },
        drain:{
          type: Sequelize.INTEGER(1),
          allowNull:true
        },
        flowrate:{
          type: Sequelize.FLOAT(10),
          allowNull:true
        },
        solarRadiat:{
          type: Sequelize.FLOAT(6),
          allowNull:true
        },
        Temperature:{
          type: Sequelize.FLOAT(6),
          allowNull:true
        },
      },
      {
        sequelize,
        timestamps:false,
        underscored: false,
        modelName: "Machine2",
        tableName: "Machine2",
        paranoid:false,
        charset:"utf8",
        collate:"utf8_general_ci"
      }
    )
  }
  static associate(db){
    db.Machine2
  }
}

module.exports = Machine2;