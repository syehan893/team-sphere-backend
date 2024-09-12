import express from "express";
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user-controller";
import { authenticate } from "../middleware/auth-middleware";

const router = express.Router();

router.post("/", authenticate, createUser);
router.get("/:id", authenticate, getUserById);
router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, deleteUser);

export default router;
