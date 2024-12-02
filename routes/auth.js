const express = require("express");
const { verifyToken } = require('../controllers/middlewares')
const router = express.Router()

const { login,verify_token } = require("../controllers/auth")

router.post("/login", login)
router.post("/verify",verifyToken,verify_token)

module.exports = router;