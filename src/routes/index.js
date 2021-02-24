import express from "express";
import access from "./access";
// import booking from "./booking";
// import review from "./review";
// import profile from "./profile"
import service from "./service";
import servicetype from "./servicetype";

const router = express.Router();
router.use(access);
// router.use(booking);
// router.use(review);
router.use(service);
// router.use(profile);
router.use(servicetype);

export default router;
