const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    todo : String,
    isComplete : Boolean
})

const Task = mongoose.model('task', TaskSchema)     // should create using singular form 'task'
// This model is finding the plural form in Database

module.exports = Task