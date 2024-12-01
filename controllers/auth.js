const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const {resStatus} = require("../lib/responseStatus")

//로그인
exports.login = async (req,res,next) => {
  console.log("POST /login 진입");
  const {id, password} = req.body;
  const user = await User.findOne( { where: { id: id }});
  try{
    // if(!id || !password) {
    //   return res.sendStatus(404)
    // }
    if(!user){
      return res.sendStatus(404)
    }
    const validPassword = await bcrypt.compare(password, user.dataValues.password)
    if(validPassword){
      const token = jwt.sign({
        id: user.dataValues.id
      }, process.env.JWT_SECRET, {
        expiresIn: '30m',
        issuer:'isaac test'
      })
      res.cookie('token', token, {
        httpOnly: true
      })
      return res.status(200).json({
        code:200,
        message: "토큰발급",
        token,
      })
    } else {
      return res.sendStatus(400).json({
        code:400,
        message: "wrong password"
      })
    }
  } catch (error) {
    return res.sendStatus(403)
  }
}

