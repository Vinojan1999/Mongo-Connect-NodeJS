
const Task = require('../models/todo.model')

exports.addTodo = (req,res)=>{
    console.log(req.body)
  
    const task = new Task({
        todo : req.body.task,
        isComplete : req.body?.isComplete
    })
    // This save method is insert this object into the collection in DB
    
   task.save((err, doc) => {
        if(err){
             console.log(err)
            return res.sendStatus(404).json(err)
        }
        console.log(doc)
        return res.json(doc)
    })
}