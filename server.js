const express=require('express')
const  app = express();
const bodyParser = require("body-parser");
const Person=require('./models/Person');
const db=require('./db');
// import he router file
const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')


app.get('/',function (req,res){
    res.send("Welcome to my Hotal ! BANGALIYANA .............");
})

app.use('/person',personRoutes);

app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log('Server is listen at local host 3000')
})