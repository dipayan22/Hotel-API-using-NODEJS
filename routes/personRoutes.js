const express=require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Person=require('./../models/Person');

router.post('/',async(req,res)=>{
    try{
        const data=req.body

        const newPerson=new Person(data);

        const response=await newPerson.save()
        console.log('data saved')
        res.status(200).json(response)
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})


router.get('/',async(req,res)=>{
    try{
        const persons = await Person.find();
        console.log('Data Fetched')
        res.status(200).json(persons)
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }
})


router.get('/:workType' ,async(req,res)=>{
    try{
        const worktype=req.params.workType;
        if(worktype=='chef' ||  worktype == 'waiter' || worktype=='manager') {
            const response=await Person.find({work:worktype})
            console.log('Person data Fetched worktype data');
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error: 'Invalid work type'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        // Check if the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(personId)) {
            return res.status(400).json({ error: 'Invalid ObjectId' });
        }

        // Find and update the document
        const response = await Person.findByIdAndUpdate(
            personId,
            updatedPersonData,
            {
                new: true, // Return the updated document
                runValidators: true, // Run model validators
            }
        );

        // Check if the document was found and updated
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data updated');
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});


module.exports=router;