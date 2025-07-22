const userModel = require("../models/user.models");
const useServices = require("../services/user.service");
const { validationResult } = require("express-validator");
const BlacklistedTokenModel = require("../models/blacklist.models");

module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

//   console.log(req.body);

  // Correctly destructure fullname
  const {
    fullname: { firstname, lastname },
    email,
    password,
  } = req.body;

  const isUserAlready=await userModel.findOne({ email});
  if(isUserAlready){
      return res.status(400).json({message:"User already exist with this email"});
  }

  try {
    const hashPassword = await userModel.hashPassword(password);

    const user = await useServices.createUser({
      firstname, // Now directly using destructured values
      lastname,
      email,
      password: hashPassword,
    });

    const token = user.generateAuthToken(); // Correct spelling

    res.status(201).json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



module.exports.loginUser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({email}).select("+password");
    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token=user.generateAuthToken();
    res.cookie("tokens", token);
    res.status(200).json({token,user});

    
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie("tokens");
    const token=req.cookies.tokens || req.headers.authorization?.split(" ")[1];
    await BlacklistedTokenModel.create({token});
    res.status(200).json({message:"Logged out"});
}