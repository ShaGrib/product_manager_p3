const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        minLength: [3, 'title needs to be at least 3 characters']
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
        min: [1, 'price cannot be $0']
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        minLength: [3, 'description must be at least 3 characters']
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
