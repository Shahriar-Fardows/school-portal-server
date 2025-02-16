import { StudentController } from "./student.controller";

const { Router } = require("express");

const route = Router();

route.post("/add-student", StudentController.addStudent);
route.get("/get-student", StudentController.getStudent);

export const StudentRouter = route;
