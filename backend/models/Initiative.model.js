const mongoose = require('mongoose')
const {Schema} = mongoose;

const initiativeSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    name:String,
    address:String,
    photos:[String],
    description:String,
    Perks:[String],
    checkIn:Number,
    checkOut:Number,
    maxGuests:Number,
    price:Number
})

module.exports = mongoose.model("Place", initiativeSchema);