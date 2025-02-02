import express from "express";
import create from "../../modules/booking/controllers/create";
import bookings from "../../modules/booking/controllers/bookings";
import requests from "../../modules/booking/controllers/requests";
import edit from "../../modules/booking/controllers/edit";

import { isLoggedIn } from "../../helpers/middlewares";

const router = express.Router();

router.get("/bookings/:clientId", isLoggedIn(), bookings);

router.get("/requests/:ownerId", isLoggedIn(), requests);

router.put("/booking/:bookingId/:status", isLoggedIn(), edit);

router.post("/booking/:id", isLoggedIn(), create);

export default router;
