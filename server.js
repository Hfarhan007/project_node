const express = require('express');
require('dotenv').config()
require('./db')
const bcrypt = require('bcrypt')


const app = express()


app.listen(process.env.PORT,()=>{
    console.log(`server start at port ${process.env.PORT}`)
})
