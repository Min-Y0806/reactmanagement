const express = require('express');
const path = require('path');
const app = express()
const bodyParser=require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded:true}));

app.get("/api/customers", (req,res) => {
  res.send([{
    id:1,
    image:"http://placeimg.com/64/64/1",
    name:'Yang',
    birthday:'970806',
    gender:'Male',
    job:"Student"
  },
    {
    id:2,
    image:"http://placeimg.com/64/64/2",
    name:'Kim',
    birthday:'960302',
    gender:'Male',
    job:"Desinger"
  },
    {
    id:3,
    image:"http://placeimg.com/64/64/3",
    name:'Lee',
    birthday:'970322',
    gender:'Female',
    job:"Programmer"
  }]
  )
})

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));