import UserRepository from "../repositories/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN, TOKEN_EXPIRES_IN } from "../../../config";

export default async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      res.status(400).json({ message: "Email or password are wrong" });
    } else if (bcrypt.compareSync(password, user.password)) {
      const userWithoutPass = await UserRepository.findByEmail(email).select(
        "-password"
      );
      const payload = {
        userId: userWithoutPass._id,
        isAdmin: userWithoutPass.isAdmin,
      };
      const token = jwt.sign(payload, SECRET_TOKEN, {
        expiresIn: TOKEN_EXPIRES_IN,
      });

      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ userWithoutPass });
    } else {
      res.status(400).json({ message: "Email or password are wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
};
