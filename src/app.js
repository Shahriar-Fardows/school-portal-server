// const { router } = require("./app/routes");
// const express = require("express");
// const cors = require("cors");
import express from "express";
import cors from "cors";
import router from "./app/routes/index.js";

const app = express();

// parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

//routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("SCHOOL POSTAL server is running");
});

export default app;
