require("dotenv").config();
const express = require("express");

// create express app
const app = express();
// import routes
const tasks = require("./routes/tasks");
// connect to database
const connectDB = require("./db/connect");
// import middleware to display 404 Page not found
const notFound = require("./middleware/not-found");

// middleware
app.use(express.static("./public")); // to run the static frontend website
app.use(express.json());

// use routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

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
