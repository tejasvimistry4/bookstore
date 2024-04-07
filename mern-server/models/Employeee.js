const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    employee_name: {
        type: String,
        required: true,
    },
    employee_email: {
        type: String,
        required: true,
    },
    employee_Salary: {
        type: Number,
        required: true,
    },

    employee_Department: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'department'
    },
    employee_working_days: {
        type: Number,
        required: true,
    },
    employee_Apsent_days: {
        type: String,
        required: true,
    },
})

employeeSchema.pre('find', function (next) {
    this.populate('employee_Department')
    next()
})


module.exports = mongoose.model('emplopyee', employeeSchema)


