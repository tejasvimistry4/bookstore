const express = require('express');
const router = express.Router();
const Plants = require('../models/Plants');

//-- http://localhost:5000/plants/addplants
router.post('/addplants', async (req, res) => {
    try {
        const newplant = new Plants({
            plant_name: req.body.plant_name,
            plants_price: req.body.plants_price,
            plant_description: req.body.plant_description,
            plant_quantity: req.body.plant_quantity,
            plant_category: req.body.plant_category
        });

        const saveplant = await newplant.save();
        res.json(saveplant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add plant' });
    }
});

// {
//     "plant_name": "lily",
//     "plants_price": "250.00",
//     "plant_description": "this is lily flower plant",
//     "plant_quantity": "25",
//     "plant_category": "FLower plant"
// }

//-- http://localhost:5000/plants/viewplants

router.get('/viewplants', async (req, res) => {
    try {
        const plants = await Plants.find();
        res.status(200).json(plants);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch plants' });
    }
});

//-- http://localhost:5000/plants/viewplants/65e016d8ed728b83a1ca4370
router.get('/viewplants/:id', async(req, res)=>{
    try {
        const plants = await Plants.findById(req.params.id )
        res.status(200).json(plants)
    } catch (error) {
        res.status(500).json({"error":error})
        
    }
})

//-- http://localhost:5000/plants/updateplants/65e016d8ed728b83a1ca4370

router.put('/updateplants/:id', async(req, res)=>{
    try {
        const plants = await Plants.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
            )
        res.status(200).json(plants)
    } catch (error) {
        res.status(500).json({"error":error})
        
    }
})

//-- http://localhost:5000/plants/deleteplants/65e016d8ed728b83a1ca4370

router.delete('/deleteplants/:id', async(req, res)=>{
    try {
        const plants = await Plants.findByIdAndDelete(req.params.id )
        res.status(200).json(plants)
    } catch (error) {
        res.status(500).json({"error":error})
        
    }
})

module.exports = router;
