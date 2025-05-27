import express, { Router } from "express";
import {
  getAllUser,
  postCreateUser,
  postLoginUser,
} from "../controller/User.Controller";

const router: Router = express.Router();

router.get("/", getAllUser);
router.post("/login", postLoginUser);
router.post("/register", postCreateUser);

export default router;
