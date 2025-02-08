import { Router } from "express";
import { AnnouncementController } from "./anousment.controller.js";

const route = Router();

route.post("/add-announcemet", AnnouncementController.insertAnnounsment);

export const AnnouncementRouter = route;
