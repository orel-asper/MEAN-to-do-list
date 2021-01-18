const Todo = require('express').Router()

const todoSchema = require('../models/Todolist')

Todo.post('/post', (req, res) => {
    todoSchema.create(req.body, (err, data) => {
        if (err) {
            res.status(500).json({ err: true, msg: 'Error creating' })
        } else {
            res.status(200).json(data)
        }
    })
})

Todo.get('/', (req, res) => {
    todoSchema.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ err: true, msg: 'Error getting' })
        } else {
            res.status(200).json(data)
        }
    })
})

Todo.delete('/delete/:id', (req, res) => {
    todoSchema.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).json({ err: true, msg: 'Error deleiting' })
        } else {
            res.status(200).json(data)
        }
    })
})



module.exports = Todo