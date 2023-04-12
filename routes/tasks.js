// Description: This file contains all the routes for the tasks
const express = require("express");

const router = express.Router();

// import controller
const { getAllTasks } = require("../controllers/tasks");

router.route("/").get(getAllTasks);

module.exports = router;
