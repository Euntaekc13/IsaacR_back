    /*
    1. req.body에 담긴 데이터 형태 확인할 것
    2. 확인된 데이터 형식을 바탕으로 Sequelize문을 작성할 것
    3. 데이터가 DB에 저장되는지 확인 할 것
    4. 저장된 데이터를 홈페이지에서 조회할 것
    5. raspi에서 배수 및 제어 컨트롤 상태값을 받아온다
    6. DB의 컨트롤의 마지막 데이터와 비교 후 값이 다를 경우 변경 요청 처리
    */
const { OP } = require('sequelize')
const Machine1 = require("../models/machine1") //광주 차온
const Machine2 = require("../models/machine2") // 광주 가변
const Machine3 = require("../models/machine3") // 서울 차온
const Machine4 = require("../models/machine4") // 서울 가변
const Control_Seoul = require("../models/control_Seoul") // 서울 제어
const Control_Gwangju = require("../models/control_Gwangju") // 광주 제어


exports.getMachineData = async (req, res, next) => {
    try{
      console.log("POST raspi data");
      const data = req.body
      
      if (data.address === 'Gwangju') {
        const control = data.control
        const logger2 = data.logger2
        const logger3 = data.logger3
        const radiation = data.radiation
        const OnoffData = await Machine1.create({
          T1:logger3[0],
          T2:logger3[1],
          T3:logger3[2],
          T4:logger3[3],
          T5:logger3[4],
          T9:logger3[8],
          T10:logger3[9],
          T11:logger3[10],
          T12:logger3[11],
          T13:logger3[12],
          sole_noid:logger3[14],
          drain:logger3[15],
          flowrate:logger3[13],
          solarRadiat:radiation[0],
          Temperature:radiation[1]
        });
        const VaiableData = await Machine2.create({
          T1:logger2[0],
          T2:logger2[1],
          T3:logger2[2],
          T4:logger2[3],
          T5:logger2[4],
          T9:logger2[8],
          T10:logger2[9],
          T11:logger2[10],
          T12:logger2[11],
          T13:logger2[12],
          pump:logger2[16],
          heater:control[17],
          sole_noid:logger2[14],
          drain:logger2[15],
          flowrate:logger2[13],
          solarRadiat:radiation[0],
          Temperature:radiation[1]
        });
      } else if (data.address === 'Seoul') {
        const control = data.control
        const logger2 = data.logger2
        const logger3 = data.logger3
        const radiation = data.radiation
        const OnoffData = await Machine3.create({
          T1:logger3[0],
          T2:logger3[1],
          T3:logger3[2],
          T4:logger3[3],
          T5:logger3[4],
          T9:logger3[8],
          T10:logger3[9],
          T11:logger3[10],
          T12:logger3[11],
          T13:logger3[12],
          sole_noid:logger3[14],
          drain:logger3[15],
          flowrate:logger3[13],
          solarRadiat:radiation[0],
          Temperature:radiation[1]
        });
        const VaiableData = await Machine4.create({
          T1:logger2[0],
          T2:logger2[1],
          T3:logger2[2],
          T4:logger2[3],
          T5:logger2[4],
          T9:logger2[8],
          T10:logger2[9],
          T11:logger2[10],
          T12:logger2[11],
          T13:logger2[12],
          pump:logger2[16],
          heater:control[17],
          sole_noid:logger2[14],
          drain:logger2[15],
          flowrate:logger2[13],
          solarRadiat:radiation[0],
          Temperature:radiation[1]
        });
      } else {
        console.log('raspberry:',req.body);
        
      }

      
      return res.status(200).json({
        code: 200,
        message:"success"
      })
    } catch(error){
      console.log(error)
  }
}












/* //# mqtt 통신
const mqtt = require("mqtt")
const client = mqtt.connect('mqtt://172.30.1.38:1883')
*/


  /* // # mqtt 통신
  console.log("mqtt 함수 진입");
  client.on('connect', () => {
    console.log("client connected",client.connected);
  
    client.subscribe('topic')
    client.on("message", (topic, message)=> {
      const data = Buffer.from(message)
      console.log("Mqtt data : ",data.toString())
    })
  })
  */
