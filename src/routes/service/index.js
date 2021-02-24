import express from "express";
import remove from "../../modules/service/controllers/remove";
import create from "../../modules/service/controllers/create";
import services from "../../modules/service/controllers/services";
import search from "../../modules/service/controllers/search";
import edit from "../../modules/service/controllers/edit";
import detail from "../../modules/service/controllers/detail";

import { isLoggedIn } from "../../helpers/middlewares";

const router = express.Router();

router.post("/service", isLoggedIn(), create);

router.get("/services", services);

router.get("/service/search", search);

router.put("/service/:id", isLoggedIn(), edit);

router.get("/service/:id", isLoggedIn(), detail);

router.delete("/service/:id", isLoggedIn(), remove);

export default router;
