
import express from 'express';
import dotenv from 'dotenv';
import connectDb from "./db/index.js";
const app = express()
dotenv.config()



connectDb()
app.listen(process.env.PORT, () => {
    console.log(`app is listen port is ${process.env.PORT}`)
})