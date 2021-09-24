
const mongoose = require("mongoose");
// const {taskSchema} = require("./taskDBModel")

const userSchema = new mongoose.Schema({
  userId:{
      type:String,
      required:true,
      select:false
    },
  userName: { 
      type: String,
      default: null,
      required:[true,"Username is required"]
    },
  email: { 
      type: String, 
      unique: true,
      required:true 
    },
  password: { 
      type: String ,
      required:true,
    },
  confirmPassword:{ 
      type:String,
      required:true,
      select:false
    },
  token: {
       type: String,
       },
  // tasks:{
  //   type:[taskSchema],
  //   default:[]
  // },
  profileImage:{
    type:String
  }
  
});

const User = mongoose.model("users", userSchema);

module.exports=User