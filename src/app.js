const { router } = require("./app/routes");
const express = require("express");
const cors = require("cors");
const app = express();

// parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

//routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("SCHOOL POSTAL server is running");
});

module.exports = app;
