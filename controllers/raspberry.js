const { OP } = require('sequelize')
const Machine1 = require("../models/machine1")
const Machine2 = require("../models/machine2")
const Machine3 = require("../models/machine3")
const Machine4 = require("../models/machine4")
const Control_Seoul = require("../models/control_Seoul")
const Control_Gwangju = require("../models/control_Gwangju")
    /*
    1. req.body에 담긴 데이터 형태 확인할 것
    2. 확인된 데이터 형식을 바탕으로 Sequelize문을 작성할 것
    3. 데이터가 DB에 저장되는지 확인 할 것
    4. 저장된 데이터를 홈페이지에서 조회할 것
    5. raspi에서 배수 및 제어 컨트롤 상태값을 받아온다
    6. DB의 컨트롤의 마지막 데이터와 비교 후 값이 다를 경우 변경 요청 처리
    */

exports.getMachineData = async (req, res, next) => {
    try{
      console.log("POST raspi data");
      const data = req.body
      // const Arr_result = arration(data) 
      
      console.log(req);
      // for(i in Arr_result) {
      //   // console.log(i);
      //   if(Arr_result[i][0] == 1){
      //     console.log("1번 machine");
      //   } else if(Arr_result[i][0] == 2) {
      //     console.log("2번 machine");
      //   } else if(Arr_result[i][0] == 3) {
      //     console.log("3번 machine");
      //   } else if(Arr_result[i][0] == 4) {
      //     console.log("4번 machine");
      //   } else {
      //     return res.status(404).json({
      //       code: 404,
      //       message:"success"
      //     })
      //   }
      // }
      
      return res.status(200).json({
        code: 200,
        message:"success"
      })
    } catch(error){
      console.log(error)
  }
}

arration = (data) => {
  let arr = []
  for(i in data){
    let variable = data[i].split()
    
    let arr_variable = variable[0].split(",")
    arr.push(arr_variable)
  }
  return arr
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
