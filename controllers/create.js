const User = require("../models/user")
const bcrypt = require('bcrypt');

//기본 유저 생성 및 조회
exports.auth = async () =>{
  const id = process.env.ID
  const pw = process.env.PASSWORD
  const verify = process.env.VERIFY
  const masterID = process.env.MASTER_ID
  const masterPW = process.env.MASTER_PW
  const masterVerify = process.env.MASTER_VERIFY
  const hash = await bcrypt.hash(pw, 12)
  const Master_hash = await bcrypt.hash(masterPW,12)
  const [user, created_user] = await User.findOrCreate({
    where:{id: id},
    defaults:{
      id:id,
      password: hash,
      verify : verify
    }
  })
  if(created_user){
    //user가 없을 경우, 생성 메세지
    console.log("created user");
  } else {
    //user가 있을 경우, return 메세지
    console.log("User already");
  }
  const [master, created_master] = await User.findOrCreate({
    where:{id: masterID},
    defaults:{
      id: masterID,
      password: Master_hash,
      verify : masterVerify
    }
  })
  if(created_master){
    console.log("created master"); 
  } else {
    console.log("Master already");
  }
}

