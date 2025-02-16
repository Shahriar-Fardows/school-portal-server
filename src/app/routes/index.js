import express from "express";
import { AnnouncementRouter } from "../module/Anousment/anousment.routes.js";
import { TeacherRouter } from "../module/Teacher/teacher.routes.js";
import { ClassRouter } from "../module/class/class.routes.js";
import { StudentRouter } from "../module/Student/student.routes.js";
const router = express.Router();

const moduleRoutes = [
  { path: "/announcement", route: AnnouncementRouter },
  { path: "/teacher", route: TeacherRouter },
  { path: "/class", route: ClassRouter },
  { path: "/student", route: StudentRouter },
];

moduleRoutes.forEach((el) => router.use(el.path, el.route));

export default router;
