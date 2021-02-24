import express from "express";
import types from "../../modules/servicetype/controllers/types";
import oneType from "../../modules/servicetype/controllers/oneType";

const router = express.Router();

router.get("/servicetype", types);

router.get("/servicetype/:id", oneType);

export default router;
