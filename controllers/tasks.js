const Task = require("../models/Task");

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    // mongoose static function to get all tasks
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Get an individual task with its id
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    // Check whether the task exists or not
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    // This is in case the syntax for the id is wrong
    res.status(500).json({ msg: error });
  }
};

// Update a single task
const updateTask = async (req, res) => {
  try {
    // get the id from the request's parameters
    const { id: taskID } = req.params;
    // Include the options to return new values and run validators for the request's parameters
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true
    });

    // Check whether the task exists or not
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    // This is in case the syntax for the id is wrong
    res.status(500).json({ msg: error });
  }
};

// Quite similar to update task, used to check the functionality of PUT
/*
const editTask = async (req, res) => {
  try {
    // get the id from the request's parameters
    const { id: taskID } = req.params;
    // Include the options to return new values and run validators for the request's parameters
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true
    });

    // Check whether the task exists or not
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    // This is in case the syntax for the id is wrong
    res.status(500).json({ msg: error });
  }
};
*/

// Delete a single task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    // Check whether the task exists or not
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    // This is in case the syntax for the id is wrong
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
  //editTask
};
