import express from "express";
import remove from "../../modules/service/controllers/remove";
import create from "../../modules/service/controllers/create";
// import search from "../../modules/service/controllers/search";
// import edit from "../../modules/service/controllers/edit";
import detail from "../../modules/service/controllers/detail";
import services from "../../modules/service/controllers/services";

import { isLoggedIn } from "../../helpers/middlewares";

const router = express.Router();

router.post("/service", isLoggedIn(), create);

router.get("/service/:id", isLoggedIn(), detail);

router.get("/services/:userId", isLoggedIn(), services);

// router.get("/service/search", search);

// router.put("/service/:id", isLoggedIn(), edit);

router.delete("/service/:id", isLoggedIn(), remove);

export default router;
