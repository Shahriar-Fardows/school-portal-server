import { Router } from "express";
import { TeacherController } from "./teacher.controller.js";

const route = Router();

route.post("/add-teacher", TeacherController.addNewTeacher);
route.get("/get-teachers", TeacherController.getAllTeachers);

export const TeacherRouter = route;
