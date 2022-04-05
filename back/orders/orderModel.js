const mongoose = require('mongoose');
const { Schema } = mongoose;

const dishSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    amount: Number
});

const orderSchema = new Schema({
    date: {type: Date, default: new Date()},
    details: [dishSchema],
    totalAmount: Number,
    status:  { type: Number, default: '0' } // 0: ongoing, 1: delivered
});

orderSchema.methods.fillAmounts = function fillAmounts() {
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