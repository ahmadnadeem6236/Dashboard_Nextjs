import express from "express";
import { storagePost, storageTask } from "../Storage/Storage.js";
import {
  addCinformation,
  getUser,
} from "../controllers/cinformationController.js";
import { addTask, getTask } from "../controllers/taskController.js";

import multer from "multer";
import { msgDb, sendMessage } from "../controllers/broadcastController.js";

const router = express.Router();
const upload = multer({ storagePost, storageTask });

router.post("/uploadPost", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Done");
});
router.post("/uploadTask", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Done");
});

router.post("/addinformation", addCinformation);
router.get("/getuser", getUser);

router.post("/addtask", addTask);
router.get("/gettask", getTask);

router.get("/sendmsg", sendMessage);
router.post("/savemsg", msgDb);

export default router;
