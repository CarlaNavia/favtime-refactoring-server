import express from "express";
import create from "../../modules/review/controllers/create";
import reviews from "../../modules/review/controllers/reviews";

import { isLoggedIn } from "../../helpers/middlewares";

const router = express.Router();

router.post("/review/:id", isLoggedIn(), create);

router.get("/reviews/:id", isLoggedIn(), reviews);

export default router;
