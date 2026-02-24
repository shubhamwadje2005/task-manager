const { singin, registerEmployee, signout, sendOTP, verifyOTP, forgetPassword, changePassword } = require("../controllers/auth.controller.js")

const router = require("express").Router()

router
    .post("/singin", singin)
    .post("/register-employee", registerEmployee)
    .post("/signout", signout)
    .post("/send-otp", sendOTP)
    .post("/verify-otp", verifyOTP)
    .post("/forget-Password", forgetPassword)
    .post("/change-Password", changePassword)

module.exports = router