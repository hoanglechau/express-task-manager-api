require("dotenv").config();
const express = require("express");

// create express app
const app = express();

// import routes
const tasks = require("./routes/tasks");

// connect to database
const connectDB = require("./db/connect");
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
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
