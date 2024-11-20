
import express from 'express';
import { registerUser, loginUser, getAllUsers } from "../controllers/registerController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);


export default router;