const mongoose=require('mongoose');

const mongoURL='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser : true ,  // adds a warning message if we are using old url
    useUnifiedTopology : true   // to avoid confusion while connecting with MongoDB server
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to the database");
})

db.on('disconnected',()=>{
    console.log("Disconnected from the database")
})

db.on('error',()=>{
    console.log('MongoDB connection error!')
})

module.exports=db;