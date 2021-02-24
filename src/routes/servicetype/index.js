import express from "express";
import types from "../../modules/servicetype/controllers/types";
import oneType from "../../modules/servicetype/controllers/oneType";
import listOfServicesByTypes from "../../modules/servicetype/controllers/listOfServicesByTypes"

const router = express.Router();

router.get("/servicetype", types);

router.get("/servicetype/:id", oneType);

router.get("/servicetype/:id/services", listOfServicesByTypes);

export default router;
