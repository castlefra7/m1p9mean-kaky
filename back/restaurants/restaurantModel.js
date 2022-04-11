const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    name: {type: String, lowercase: true, unique: true, required: true},
    // TODO: user_id
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;