const mongoose = require('mongoose')

const Schema = mongoose.Schema



const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: `title num: ${Math.random()}`
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Todos', todoSchema)