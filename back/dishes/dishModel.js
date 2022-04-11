const mongoose = require('mongoose');
const {Schema} = mongoose;

const dishSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    restau_id: {type: Schema.Types.ObjectId, ref: 'Restaurant'},
    created_date: {type: Date, default: new Date()}
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;