const express = require('express');
const path = require('path');
const app = express()
const bodyParser=require("body-parser");
const fs=require("fs")
const data=fs.readFileSync('./database.json')
const conf=JSON.parse(data)
const mysql=require("mysql")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded:true}));

const connection=mysql.createConnection({
    host:conf.host, 
    user:conf.user,
    password:conf.password,
    database: conf.database
})

connection.connect()

app.get("/api/customers", (req,res) => {
  connection.query(`SELECT * FROM customers`,(err,rows)=>{
    res.send(rows)
  })
})

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));