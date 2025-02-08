// const mongoose = require("mongoose");
import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";

let server;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.DB_URL);
    server = app.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.log({
      message: "Error connecting to server",
      err,
    });
  }
}

process.on("unhandledRejection", () => {
  console.log(`Unhandled rejection is detected. Shutting down...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(`Uncaught exception is detected. Shutting down...`);
  process.exit(1);
});
