import express from "express";
import { AnnouncementRouter } from "../module/Anousment/anousment.routes.js";
// import AnnouncementRouter from "../module/Anousment/anousment.routes.js";
const router = express.Router();

const moduleRoutes = [{ path: "/announcement", route: AnnouncementRouter }];

moduleRoutes.forEach((el) => router.use(el.path, el.route));

export default router;
