// import express from 'express'
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db');
const app = express();
dotenv.config();
const mongodb_url = process.env.MONGO_URI


app.get('/',(req,res)=>{
    res.send("HI")
})

const PORT = 3000;

const start = async () => {
    try {
        await connectDB(mongodb_url);
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();
