const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = require("./app");

dotenv.config({path:"./config.env"});
console.log(process.env.STORAGE)
if(process.env.STORAGE=="database"){
    console.log("server")
    mongoose.connect(process.env.DB_LOCAL,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    })
    .then((connection)=>{
        console.log("Successfully connected to db");
        app.listen(process.env.PORT),
        console.log("Successfully connected at port:",process.env.PORT);
    
    })
    .catch((err=>{
        console.log("Error in connection",err)
        
    }))
}
else{
    app.listen(process.env.PORT,()=>{
        console.log("Server started at port :",process.env.PORT)
    });
}


