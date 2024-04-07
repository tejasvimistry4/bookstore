const express = require('express');
const Depart = require('../models/Depart');
const router = express.Router();

// http://localhost:5000/department/adddepartment

router.post('/adddepartment', async (req, res) => {
    try {

        const department = new Depart({
            department_name: req.body.department_name
        })

        const savedepartment = await department.save()
        res.json(savedepartment)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Fialed to add department' })

    }
})

//-- http://localhost:5000/department/Viewdepartment

router.get('/Viewdepartment', async (req, res) => {
    try {
        const department = await Depart.find();
        res.status(200).json(department);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch department' });
    }
});


module.exports = router;
