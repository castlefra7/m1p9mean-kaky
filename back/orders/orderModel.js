const mongoose = require('mongoose');
const { Schema } = mongoose;

const dishSchema = new Schema({
    dish_id: {type: Schema.Types.ObjectId, ref: 'Dish'},
    name: String,
    price: Number,
    quantity: Number,
    amount: Number,
    restau_id: {type: Schema.Types.ObjectId, ref: 'Restaurant'},
    status:  { type: Number, default: '0' } // 0: ongoing, 1: delivered
});

const orderSchema = new Schema({
    date: {type: Date, default: new Date()},
    details: [dishSchema],
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    totalAmount: Number
});

orderSchema.methods.fillAmounts = function fillAmounts() {
    // TODO: Check there is only one instance of dish_id in details
    // TODO: Check quantity > 0
    if(this.details) {
        let total = 0.0;
        this.details.forEach(detail => {
            let subTotal = detail.price * detail.quantity;
            detail.amount = subTotal;
            total += subTotal;
        });
        this.totalAmount = total;
    }
}

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;