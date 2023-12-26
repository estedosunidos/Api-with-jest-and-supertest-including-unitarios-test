const mongoose = require('mongoose');
const trip= require('./model/trip.model');

(async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/trip');
    const newtrip=await trip.create({
        name:'pruebe',
        description:'jdndjhjdh',
        destination:'china',
        category:'business',
        start_date:'2022-04-05',
        end_date:'2022-07-08'
    })
    console.log('new trip',newtrip)
})()