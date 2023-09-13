const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://ratchaponpk:Ratchapon%4001@mydb.iqxroub.mongodb.net/food-ordering', {    
        useNewUrlParser: true,
    })
    .catch((error) =>{
        console.error('Connection error', error.message)
    })

const db = mongoose.connection

module.exports = db;