const taskModel = require('../models/taskModel')

const getAll = async (req,res)=>{
    const tasks = await taskModel.getAll();
    
    return res.status(200).json(tasks);
}

const createTask = async (req,res)=>{
   const createdTask = await taskModel.createTask(req.body);
    
    return res.status(201).json(createdTask)
}

const deleteTask = async (req, res)=>{
    const {id} = req.params; 

    await taskModel.deleteTask(id);

    res.status(204).json({message:'tarefa excluida'});
}

const updateTask = async(req, res)=>{
    const {id} = req.params; 
    await taskModel.updateTask(id, req.body)

    return res.status(201).json({message:'Tarefa atualizada'})
}


module.exports = ({
    getAll,
    createTask,
    deleteTask,
    updateTask
})