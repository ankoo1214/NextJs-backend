const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const userRouter = require('./routes/UserRoute');
app.use(cors());
app.use(express.urlencoded({extended:false}))
mongoose.connect( 
  "mongodb+srv://pataleankush12:8urbZ2rv2pvYQAWi@cluster0.pd5xq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log("connected to database")
});
app.use('/user', userRouter);
app.listen(port, ()=>{
    console.log(`Server is connected to port number ${port}`)
}) 