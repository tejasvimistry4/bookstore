const express = require('express');
const Employeee = require('../models/Employeee');
const router = express.Router();

// http://localhost:5000/employee/adddemployee

router.post('/adddemployee', async (req, res) => {
    try {

        
        const employee = new Employeee({
            employee_name: req.body.employee_name,
            employee_email: req.body.employee_email,
            employee_Salary: req.body.employee_Salary,
            employee_Department: req.body.employee_Department,
            employee_working_days: req.body.employee_working_days,
            employee_Apsent_days: req.body.employee_Apsent_days
        });

        const savedemployee = await employee.save();
        if (savedemployee) {
            res.status(200).json({ 'msg': 'employee Data added Successfully', 'sts': '0' })
        } else {
            res.status(500).json({ 'msg': 'employee Data Failed', 'sts': '1' })
        }

    } catch (error) {
        console.error(error);
    }
});


// http://localhost:5000/employee/viewemployee

router.get('/viewemployee', async (req, res) => {
    try {
        const employees = await Employeee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
});


// http://localhost:5000/employee/singleemployee

router.get('/singleemployee/:eid', async (req, res) => {
    const eid = req.params.eid
    try {
        const employee = await Employeee.findById(eid);
        res.status(200).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch employee' });
    }
});

module.exports = router;