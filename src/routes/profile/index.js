import express from "express";

import { isLoggedIn } from "../../helpers/middlewares";

const router = express.Router();

router.put("/profile/:id", isLoggedIn(), profile);

router.post("/buy", isLoggedIn(), credits);

router.get("/profile/:id/services", isLoggedIn(), services)

export default router;
