import express from "express";
import {
  addPackages,
  getAllUser,
  get_travelagency,
} from "../controllers/admin.controller";
import upload from "../middlewares/multer";
const router = express.Router();
router.get("/get-alluser", getAllUser);
router.post("/add-packages", upload.single("package_img"), addPackages);
router.post("/get-travelagency", get_travelagency);

export default router;
