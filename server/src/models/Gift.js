const { Schema, mongoose} = require('mongoose');

const giftSchema = new Schema({
    name: {
        type: String,
        required: [true, 'gift name is required'],
        minlength: [1, 'gift name should contain at least 1 character']
    },

    category: {
        type: String,
        default: "category",
        enum: ['category', 'Electronics', 'Books', 'Clothing', 'Toys', 'Other'],
    },    

    booked: {
        type: Boolean,
        required: false,
        default: false
    }
});

const Gift = mongoose.model('Gift', giftSchema);

module.exports = Gift;