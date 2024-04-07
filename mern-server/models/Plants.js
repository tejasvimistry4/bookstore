const mongoose =  require('mongoose')
const plantsSchema = new mongoose.Schema({
    plant_name:{
        type:String,
        required:true,
    },
    plants_price:{
        type:Number,
        required:true,
    },
    plant_description:{
        type:String,
        required:true,
    },
    plant_quantity:{
        type:Number,
        required:true,
    },
    plant_category:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model('pl_plants', plantsSchema)