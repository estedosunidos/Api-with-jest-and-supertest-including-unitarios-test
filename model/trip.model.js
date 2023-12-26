const mongoose = require('mongoose')
const schema = mongoose.Schema
const tripSchema = new schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String 
    },
    destination:{
        type:String,
        require:true,
        maxlength:15,
    },
    start_date:{
        type:Date,
        require:true
    },
    end_date:{
        type:Date,
        require:true
    },
    category:{
        type:String,
        enum:[
            'family',
            'friends',
            'business',
            'other'
        ]   
    }
        
},{timestamps:true})

module.exports=mongoose.model('trip',tripSchema)