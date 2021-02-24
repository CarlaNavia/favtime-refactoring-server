import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config";

exports.isLoggedIn = () => async (req, res, next) => {
  try {
    const decoded = await jwt.verify(req.cookies.token, SECRET_TOKEN);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not logged in" });
  }
};

exports.isNotLoggedIn = () => async (req, res, next) => {
  try {
    jwt.verify(req.cookies.token, SECRET_TOKEN);
    res.status(400).json({ message: "You are already logged in" });
  } catch (error) {
    next();
  }
};

exports.validationLoggin = () => async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    res.status(400).json({ message: "Your email or password is empty" });
  else next();
};

exports.validationRegister = () => async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) 
    res.status(400).json({ message: "All fields are required" });
  else next();
};

