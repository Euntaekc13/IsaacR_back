const Sequelize = require("sequelize")

class control_Gwangju extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        udatedAt:{
          type: Sequelize.DATE(4),
          allowNull:false
        },
        cycle:{
          type:Sequelize.INTEGER(5),
          allowNull:false,
        },
        drainTime_on:{
          type:Sequelize.STRING(4),
          allowNull:false,
        },
        drainTime_off:{
          type:Sequelize.STRING(4),
          allowNull:false,
        },
        control_mode:{
          type:Sequelize.INTEGER(1),
          allowNull:false,
        },
        varTemp:{
          type:Sequelize.INTEGER(2),
          allowNull:false,
        },
        start_OnoffTemp:{
          type:Sequelize.INTEGER(2),
          allowNull:false,
        },
        end_OnoffTemp:{
          type:Sequelize.INTEGER(2),
          allowNull:false,
        }
      },
      {
        sequelize,
        timestamps:false,
        underscored: false,
        modelName: "control_Gwangju",
        tableName: "control_Gwangju",
        paranoid:false,
        charset:"utf8",
        collate:"utf8_general_ci"
      }
    )
  }
  static associate(db){
    db.control_Gwangju
  }
}


module.exports = control_Gwangju;