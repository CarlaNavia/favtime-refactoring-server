import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  try {
    const videos = await ServiceRepository.getAllServices();

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
