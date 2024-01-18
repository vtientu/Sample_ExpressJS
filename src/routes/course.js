import express from "express";
import { courseController } from "../controllers/index.js";

const courseRouter = express.Router();
courseRouter.get("/", courseController.getCourseList);
courseRouter.get("/:id", courseController.getCourseDetail);

export default courseRouter;
