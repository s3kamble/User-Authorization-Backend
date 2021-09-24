const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uniqid = require("uniqid")
const User = require("../models/userModel.js");
const upload = require("../controllers/imageController")

const uploadFileName = (req,res,next)=>{
    upload(req,res,(err)=>{
       if(err){
         return res.send(err);
       }
       req.file = req.file.filename;
       next();
    })
}

const signup = async(req,res) =>{
    try {
        const { userName, email, password ,confirmPassword} = req.body;
  
        if(password == confirmPassword){
          const oldUser =  await User.findOne({ email });
    
          if (oldUser == "undefined") {
          //   return res.status(409).send("User Already Exist. Please Login");
          console.log("User already exists")
          }
    
          encryptedPassword = await bcrypt.hash(password, 10);
    
          const user = await User.create({
            userId:uniqid(),
            userName:userName,
            email:email.toLowerCase(),
            password:encryptedPassword,
            confirmPassword:encryptedPassword, 
            profileImage:req.file || " "
              
          });
       
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
       
        user.token = token;
        res.status(201).json(user);
      } 
    
    }  catch (err) {
         
          console.log(err);
          res.status(500).json({
            message:"server error"
        })
      }
 };

 const login = async(req,res) =>{
    try {
        const { email, password } = req.body;
       
        if (!(email && password)) {
          // res.status(400).send("All input is required");
          console.log("All inputs are mandatory")
        }
   
        const user = await User.findOne({email});
           
        if (user && (await bcrypt.compare(password, user.password))) {
          
          // Create token
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
          // save user token
          user.token = token;
    
          return res.status(200).json(user);
        }
        else{
          res.status(400).send("Invalid Credentials");

        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
          message:"server error"
        })
      }
 }
    
module.exports={
    signup,
    login,
    uploadFileName,
}
