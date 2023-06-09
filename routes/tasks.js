// Description: This file contains all the routes for the tasks
const express = require("express");

const router = express.Router();

// import controllers
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
  //editTask
} = require("../controllers/tasks");

// define routes
// can include .put(editTask) for PUT method
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
