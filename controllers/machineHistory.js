const { resStatus } = require("../lib/responseStatus");
// # 1번 : 광주 차온 
const Machine1 = require("../models/machine1")
// # 2번 : 광주 가변  
const Machine2 = require("../models/machine2")
// # 3번 : 서울 차온  
const Machine3 = require("../models/machine3")
// # 4번 : 서울 가변 
const Machine4 = require("../models/machine4")
const { Op } =require('sequelize')


exports.MachineHistory = async( req, res, next) => {
  
  try{
    console.log("POST /machinedata 진입");

    const { machinenumber, startdate, enddate } = req.body
    console.log(req.header);

    if(!startdate || !enddate){
      return res.status(resStatus.insufficient.code).json({
        message: resStatus.insufficient.message //206 보낼 data가 없거나 부족할 때
      })
    }
    //조회 날짜 조건 
    const startDate = new Date(startdate)
    const endDate = new Date(enddate)
    
    // //where 조건 추가 필요
    if(machinenumber === '숭실대 차온') {
      const TestResult = await Machine1.findAll({
        where:{
          [Op.and]:{
            createAt : {
              [Op.and]:[{[Op.gte]:startDate}, {[Op.lt]:endDate}]
            }
          }
        }
      })
      console.log('TestResult : ',TestResult);
      
      return res.status(200).json({
        message: "숭실대 차온",
        data: {TestResult}
      })
    } 
    else if(machinenumber === '숭실대 가변'){
      const TestResult = await Machine2.findAll({
        where:{
          [Op.and]:{
            createAt : {
              [Op.and]:[{[Op.gte]:startDate}, {[Op.lt]:endDate}]
            }
          }
        }
      })
      return res.status(200).json({
        message: "숭실대 가변",
        data: {TestResult}
      })
    } 
    else if(machinenumber === '광주 차온'){
      const TestResult = await Machine3.findAll({
        where:{
          [Op.and]:{
            createAt : {
              [Op.and]:[{[Op.gte]:startDate}, {[Op.lt]:endDate}]
            }
          }
        }
      })
      return res.status(200).json({
        message: "광주 차온",
        data: {TestResult}
      })
    }
    else if(machinenumber == '광주 가변'){
      const TestResult = await Machine4.findAll({
        where:{
          [Op.and]:{
            createAt : {
              [Op.and]:[{[Op.gte]:startDate}, {[Op.lt]:endDate}]
            }
          }
        }
      })
      return res.status(200).json({
        message: "광주 가변",
        data: {TestResult}
      })
    } else {
      return res.status(201).json({
        code: 201,
        message: "machine select error"
      })
    }

  } catch(error){
    console.log(error);
    next(error)
  }
}