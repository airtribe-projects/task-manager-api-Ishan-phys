const express = require('express');
const tasksController = require('../controller/tasksController');

const router = express.Router();

router.get('/', tasksController.getAllTasks);
router.post('/', tasksController.createTask);
router.get('/priority/:level', tasksController.getTasksByPriority);
router.get('/:id', tasksController.getTaskById);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;