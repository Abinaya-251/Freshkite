import express from "express";
import {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourse,
  getCourses,
} from "../controllers/course.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE/
router.post("/", verifyAdmin, createCourse);
//UPDATE
router.put("/:id", verifyAdmin, updateCourse);

//DELETE
router.delete("/:id", verifyAdmin, deleteCourse);

//GET
router.get("/:id", verifyAdmin, getCourse);

//GET ALL
router.get("/", verifyAdmin, getCourses);

export default router;