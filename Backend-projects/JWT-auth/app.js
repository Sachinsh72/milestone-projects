//create server
const express = require('express');
const app = express();
const authRouter = require('./router/autheRoute');  //import authRouter
const databaseconnect = require('./config/databaseConfig');    //import database 
const cookieParser = require('cookie-parser');
const cors = require('cors');

databaseconnect();   //database call

//for parse
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}))

app.use('/api/auth',authRouter);

//basic route
app.use('/', (req,res)=>{
    res.status(200).json({data: 'JWTauth server --updated'});
})

module.exports = app;   //export server