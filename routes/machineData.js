const express = require("express")
const router = express.Router();
const { verifyToken } = require('../controllers/middlewares')

const { MachineHistory } =require("../controllers/machineHistory")
const { getMachineData } =require("../controllers/raspberry")

// Client to Server (Data 요청)
router.post("/machinedata",verifyToken, MachineHistory);
// Rspiberry to Server (data)
router.post("/raspberrydata", getMachineData)

module.exports = router;