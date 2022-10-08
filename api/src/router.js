const express = require('express');
const taskController = require('./controller/taskController');
const taskMiddleware = require('./middleware/taskMiddleware');

const router = express.Router();

//router.get('/tasks', (req,res) => res.status(200).send('a rota está fncionando'));

router.get('/tasks',taskController.getAll)

router.post('/tasks',taskMiddleware.validateTitle,taskController.createTask)

router.delete('/tasks/:id',taskController.deleteTask);

router.put('/tasks/:id', taskMiddleware.validateStatus, taskMiddleware.validateTitle, taskController.updateTask)

module.exports = router;