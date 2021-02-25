import express from "express";
import create from "../../modules/booking/controllers/create";
import client from "../../modules/booking/controllers/client";
import owner from "../../modules/booking/controllers/owner";

import { isLoggedIn } from "../../helpers/middlewares";

const router = express.Router();

router.get("/bookings/:clientId", isLoggedIn(), client);

router.get("/requests/:ownerId", isLoggedIn(), owner);

router.post("/booking/:id", isLoggedIn(), create);

export default router;
