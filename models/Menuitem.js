const mongoose=require('mongoose')

const MenuitemSchema=new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true 
    },
    taste:{
        type:String,
        enum:['spicy','sweet','sour'],
        required:true

    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingrident:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }


})

const menuItem=mongoose.model('menuItem',MenuitemSchema)

module.exports=menuItem

