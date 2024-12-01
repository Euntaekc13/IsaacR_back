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
    if(machinenumber == 1) {
      const TestResult = await Machine1.findAll({
        where:{
          [Op.and]:{
            time : {
              [Op.and]:[{[Op.gte]:startDate}, {[Op.lt]:endDate}]
            }
          }
        }
      })
      return res.status(200).json({
        message: "machine 1",
        data: {TestResult}
      })
    } 
    else if(machinenumber == 2){
      const TestResult = await Machine2.findAll({})
      return res.status(200).json({
        message: "machine 2",
        data: {TestResult}
      })
    } 
    else if(machinenumber == 3){
      const TestResult = await Machine3.findAll({})
      return res.status(200).json({
        message: "machine 3",
        data: {TestResult}
      })
    }
    else if(machinenumber == 4){
      const TestResult = await Machine4.findAll({})
      return res.status(200).json({
        message: "machine 4",
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