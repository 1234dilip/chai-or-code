const express = require('express')
const app = express()
require('dotenv').config()


app.get('/login', (req,res) => {
    res.send('user login succesfully')
})
app.listen(process.env.PORT, () => {
    console.log(`app is listen port is ${process.env.PORT}`)
})