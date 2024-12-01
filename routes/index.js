const express = require("express")
const router = express.Router()

const authRouter = require("./auth")
const machineData = require("./machineData")

router.use('/',authRouter)
router.use('/',machineData)

module.exports = router




