const mongoose=require('mongoose')

const personSchema=new mongoose.Schema({
    name :{
        type : String,
        required: true  // this means that a field cannot be left blank
    },
    age:{
        type:Number,

    },
    work:{
        type:String,
        enum : ['chef','manager','waiter'],
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true   // this means that each email should be unique in our database
    },
    address:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;