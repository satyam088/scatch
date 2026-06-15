const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db');
const ownerRouter = require('./routes/ownerRouter');
const productsRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter');
const index = require('./routes/index');
const dbgr= require("debug")("development:app");
const expressSession = require('express-session');
const flash = require("connect-flash");
const path = require('path');

require('dotenv').config();
connectDb();
app.set('view engine','ejs');


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname , 'public')));
app.use(cookieParser());
app.use(
    expressSession({
        resave : false,
        saveUninitialized : false,
        secret : process.env.EXPRESS_SESSION_SECRET,
    })
);

app.use(flash());



app.use('/',index);
app.use('/products',productsRouter);
app.use("/owners",ownerRouter);
app.use('/users',userRouter);

app.listen(3000 , ()=>{
    dbgr("Server running..");
})