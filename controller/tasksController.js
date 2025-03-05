const fs = require('fs');

let tasks = JSON.parse(fs.readFileSync('task.json', 'utf-8'))["tasks"]

async function getAllTasks(req, res) {
    try {
        let { completed } = req.query;
        if (completed !== undefined) {
            const isCompleted = completed === "true";
            const filteredTasks = tasks.filter(element => element.completed === isCompleted);
            return res.status(200).json(filteredTasks);
        }
        res.status(200).json(tasks);
    } catch (err) {
        console.log(`Error Occured in fetching the data. Error e ${err}`);
    }
};

async function getTasksByPriority(req, res) {
    try {
        const level = req.params.level;
        const filteredTasks = tasks.filter(element => element.priority === level);
        res.status(200).json(filteredTasks);
    } catch (err) {
        console.log(`Error Occured in fetching the data. Error e ${err}`);
    }
};

async function createTask(req, res) {
    try {
        const body = { ...req.body };

        // Validate the input data
        if (!body.title || !body.description || body.completed === undefined || typeof body.completed !== "boolean") {
            return res.status(400).json({ error: "Invalid input data" });
        }

        // Add the task to the task list
        const taskId = tasks.length + 1;
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString(); // Extracts YYYY-MM-DD
        console.log(formattedDate); // Outputs: 2025-03-05
        const newTask = {
            id: taskId,
            title: body.title,
            description: body.description,
            completed: body.completed,
            creationDate:formattedDate,
            priority: body.priority
        }
        tasks.push(newTask);
        return res.status(201).json(tasks);
    } catch (err) {
        console.error(`Error occurred while creating the task: ${err}`);
        return res.status(500).json({ error: "Something went wrong" });
    }
};

async function getTaskById(req, res) {
    try {
        // Fetch a task by id
        const taskId = req.params.id;
        const task = tasks.find(item => item.id === parseInt(taskId));
        if (!task) {
            return res.status(404).json({ error: "Invalid input data" });
        }
        // Send the task if found
        res.status(200).json(task);
    } catch (err) {
        console.log(`Error in fetching the task by ID. Error e: ${err}`);
        return res.status(500).json({ error: "Something went wrong" });
    }
};

async function updateTask(req, res) {
    try {
        // Update a task by id
        const taskId = req.params.id;
        const body = req.body;
        const task = tasks.find(element => element.id === parseInt(taskId));
        if (!task) {
            return res.status(404).json({ error: "Invalid input data" });
        }
        // Validate the data
        if (!body.title || !body.description || body.completed === undefined || typeof body.completed !== "boolean") {
            return res.status(400).json({ error: "Invalid input data" });
        }
        // Update the task
        for (key of Object.keys(body)) {
            task[key] = body[key];
        }
        res.status(200).json(task);
    } catch (err) {
        console.log(`Error occured in updating the task. Error e ${err}`);
        return res.status(500).json({ error: "Something went wrong" });
    }
};

async function deleteTask(req, res) {
    try {
        // Get task ID from request parameters
        const taskId = parseInt(req.params.id);
        
        // Find the index of the task to delete
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        
        if (taskIndex === -1) {
            return res.status(404).json({ error: "Task not found" });
        }

        // Remove the task from the array
        tasks.splice(taskIndex, 1);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        console.error(`Error occurred while deleting the task: ${err}`);
        return res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = {getAllTasks, createTask, getTaskById, updateTask, deleteTask, getTasksByPriority}
