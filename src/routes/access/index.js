import express from "express";
import login from "../../modules/access/controllers/login";
import register from "../../modules/access/controllers/register";
import me from "../../modules/access/controllers/me";
import logout from "../../modules/access/controllers/logout";
import {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
  validationRegister
} from "../../helpers/middlewares";

const router = express.Router();

router.post("/login", isNotLoggedIn(), validationLoggin(), login);

router.post("/register", isNotLoggedIn(), validationRegister(), register);

router.post("/logout", isLoggedIn(), logout);

router.get("/me", isLoggedIn(), me);

export default router;
