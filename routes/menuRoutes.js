const express=require('express')
const router=express.Router();
const menuItem=require('./../models/Menuitem')

router.post('/',async(req,res)=>{
    try{
        const data=req.body

        const newMenu=new menuItem(data)

        const response=await newMenu.save()
        console.log('Data saved')
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal error'})
    }
})


router.get('/',async(req,res)=>{
    try{
        const menus=await menuItem.find()
        console.log('Menuitem data Fetched');
        res.status(200).json(menus)
    }catch(err){
        console.log(err);
        res.status(400).send("Error in fetching Data")
    }
})

module.exports=router
