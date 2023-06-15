const express = require('express')
const path = require('path')
const port = 3002
const server = express()

server.use(express.static(path.join(__dirname, '/build')))

server.listen(port, ()=>{
    console.log("success!")
})