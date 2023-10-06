import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyPrser from 'body-parser';
const app=express();
dotenv.config();
app.use(cors());
app.use(bodyPrser.json({extended:true}));
app.use(bodyPrser.urlencoded({extended:true}));
app.use('/',router);

const port=process.env.PORT;
const user=process.env.DbUserName;
const Passowd=process.env.DbPassword;

Connection(user,Passowd);
app.listen(port,()=>console.log("styrt server 8000"));
DefaultData();
