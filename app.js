const fs = require("fs");   
const express = require("express");
const cors = require("cors")
const userRouter = require("./routes/userRouter.js");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
let text= `<embed type="text/markdown" src="https://s3kamble.github.io/TO-DO-Backend/" height="100%" width="100%"/>`;
app.use(cors())

fs.writeFileSync("./public/index.html", text);
app.use(express.static("public"));


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
//     res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers ,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method")
//     next();
// });

app.use("/users",userRouter);

module.exports = app;
