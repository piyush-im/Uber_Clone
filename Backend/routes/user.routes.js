const express = require("express");
const router=express.Router();
const {body}=require("express-validator");
const userCntroller=require("../controller/user.controller");
const authMiddleware=require("../middleware/auth.middleware");

router.post("/register",[
    body("email").isEmail().withMessage("invalid email"),
    body("fullname.firstname").isLength({min:3}),
    body("password").isLength({min:6}),
],
userCntroller.registerUser
)

router.post("/login",[
    body("email").isEmail().withMessage("invalid email"),
    body("password").isLength({min:6}),
],
userCntroller.loginUser
);

router.get("/profile",authMiddleware.authUser,userCntroller.getUserProfile);
router.get("/logout",authMiddleware.authUser,userCntroller.logoutUser);

module.exports=router;