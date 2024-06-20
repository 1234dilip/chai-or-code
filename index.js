
import express from 'express';
import dotenv from 'dotenv';
const app = express()
dotenv.config()


app.listen(process.env.PORT, () => {
    console.log(`app is listen port is ${process.env.PORT}`)
})