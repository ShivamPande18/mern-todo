const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Todo', todoSchema);