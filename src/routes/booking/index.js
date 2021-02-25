import express from "express";
import book from "../../modules/booking/controllers/book";

import { isLoggedIn } from "../../helpers/middlewares";

const router = express.Router();

router.post("/booking/:id", isLoggedIn(), book);



export default router;
