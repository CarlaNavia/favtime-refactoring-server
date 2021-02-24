import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  try {
    const serviceRemoved = await ServiceRepository.removeAService(req.params.id);
    res.json({ message: "The service was deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
