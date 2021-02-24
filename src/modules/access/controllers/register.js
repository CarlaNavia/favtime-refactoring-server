import UserRepository from "../repositories/user";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";
import { SECRET_TOKEN, TOKEN_EXPIRES_IN } from "../../../config";

export default async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userExists = await UserRepository.findByEmail(email);

    if (userExists) {
      res
        .status(400)
        .json({ message: "This email is already in our database" });
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = await UserRepository.createUser({
        firstName,
        lastName,
        email,
        password: hashPass,
      });
      const newUserWithoutPass = await UserRepository.findByEmail(
        newUser.email
      ).select("-password");
      const payload = {
        userId: newUserWithoutPass._id,
      };
      const token = jwt.sign(payload, SECRET_TOKEN, {
        expiresIn: TOKEN_EXPIRES_IN,
      });

      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ newUserWithoutPass });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
};
