// Description: Entry point of the application
const express = require("express");

// create express app
const app = express();

// import routes
const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

// use routes
app.use("/api/v1/tasks", tasks);

const port = 3000;
// start server
app.listen(port, console.log(`Server is listening on port ${port}...`));
