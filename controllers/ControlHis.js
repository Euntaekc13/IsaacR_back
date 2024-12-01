const { resStatus } = require("../lib/responseStatus");
const Control_Gwangju = require("../models/control_Gwangju")
const Control_Seoul = require("../models/control_Seoul")
const { Op } =require('sequelize')

//컨트롤 변경이력 조회
exports.GETControlHistory = async( req, res, next) => {
  try{
    console.log("Get /machinedata 진입");

    //const { machinenumber, startdate, enddate } = req.body
    console.log(req.body);

  } catch(error){
    console.log(error);
    next(error)
  }
}

//컨트롤 변경 요청, 데이터 베이스에 변경 요청
exports.POSTControlChange = async( req, res, next) => {
  try{
    console.log("POST /machinedata 진입");

    //const { machinenumber, startdate, enddate } = req.body
    console.log(req.body);

  } catch(error){
    console.log(error);
    next(error)
  }
}