const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db');
const ownerRouter = require('./routes/ownerRouter');
const productsRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter');
const index = require('./routes/index');
const dbgr= require("debug")("development:app");
const bcrypt = require('bcrypt');

require('dotenv').config();
connectDb();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname , 'public')));
app.use(cookieParser());
app.set('view engine','ejs');

// app.use('/',index);
app.use('/products',productsRouter);
app.use("/owners",ownerRouter);
app.use('/users',userRouter);

app.listen(3000 , ()=>{
    dbgr("Server running..");
})