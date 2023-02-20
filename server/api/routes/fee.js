import express from "express";
import {
  createFees,
  updateFees,
  //cloneFeesStructure,
  deleteFees,
  getFees,
  getAllFees,
} from "../controllers/fees.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyAdmin, createFees);
//UPDATE
router.put("/:id", verifyAdmin,  updateFees);
//CLONE
//router.put("/:id" , cloneFees);
//DELETE
router.delete("/:id" , verifyAdmin,  deleteFees);

//GET
router.get("/:id", verifyAdmin, getFees);

//GET ALL
router.get("/", verifyAdmin, getAllFees);

export default router;