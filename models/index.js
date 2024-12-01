const Sequelize = require("sequelize")
const Machine1 = require('./machine1')
const Machine2 = require('./machine2')
const Machine3 = require('./machine3')
const Machine4 = require('./machine4')
const Control_Gwangju = require("./control_Gwangju.js")
const Control_Seoul = require("./control_Seoul.js")
const User = require("./user")
const env = "development"
const config = require('../config/config.js')[env];
// const mysql = require("./mysql.js")

const db = {}
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {dialectOptions:{
    options:{
      requestTimeout:3000
    }
  }},
)

db.sequelize = sequelize;

db.User = User
db.Machine1 = Machine1
db.Machine2 = Machine2
db.Machine3 = Machine3
db.Machine4 = Machine4
db.control_Gwangju = Control_Gwangju
db.control_Seoul = Control_Seoul

User.init(sequelize)
Machine1.init(sequelize)
Machine2.init(sequelize)
Machine3.init(sequelize)
Machine4.init(sequelize)
Control_Gwangju.init(sequelize)
Control_Seoul.init(sequelize)

User.associate(db);
Machine1.associate(db);
Machine2.associate(db);
Machine3.associate(db);
Machine4.associate(db);
Control_Gwangju.associate(db);
Control_Seoul.associate(db);

module.exports = db;

