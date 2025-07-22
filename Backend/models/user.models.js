const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const userSchema=new mongoose.Schema({
    fullName:{
        firstname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
        },
    lastname:{
        type:String,
        
        minlength:3,
        maxlength:50
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
})
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        { _id: this._id },
        process.env.jwt_SECRET,
        { expiresIn: '24h' }  // Token expires in 24 hours
    );   return token;
}

userSchema.methods.comparePassword =async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;