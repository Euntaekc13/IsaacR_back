require('dotenv').config();
const env = process.env;

const development = {
  username: env.DB_ID,
  //env.MYSQL_USERNAME은 불러오고자 하는 데이터의 키값이므로 자유롭게 이름설정이 가능하다.
  password: env.DB_PASS,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  port:env.DB_PORT,
  dialect: "mysql",
  timezone: "+09:00"
  //port: env.MYSQL_PORT
};

const production = {
  username: env.DB_ID,
  //env.MYSQL_USERNAME은 불러오고자 하는 데이터의 키값이므로 자유롭게 이름설정이 가능하다.
  password: env.DB_PASS,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  port:env.DB_PORT,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

const test = {
  username: env.DB_ID,
  //env.MYSQL_USERNAME은 불러오고자 하는 데이터의 키값이므로 자유롭게 이름설정이 가능하다.
  password: env.DB_PASS,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  port:env.DB_PORT,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

module.exports = { development, production, test };