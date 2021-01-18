const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./routes/Todo')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/toDoList', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected')
}, err => console.log("Database could not conncted" + err))


app.use(Todo)

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`))