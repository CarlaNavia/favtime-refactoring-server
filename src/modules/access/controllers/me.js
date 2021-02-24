import UserRepository from "../repositories/user";

export default async (req, res, next) => {
  const { userId } = req.user;

  try {
    const currentUser = await UserRepository.findById(userId).select(
      "-password"
    );

    res.status(200).json({ currentUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
};
