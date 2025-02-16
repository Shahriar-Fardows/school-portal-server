import { Router } from "express";
import { ClassController } from "./class.controller";

const route = Router();

route.post("/add-class", ClassController.addClass);
route.get("/get-class", ClassController.getClass);

export const ClassRouter = route;
