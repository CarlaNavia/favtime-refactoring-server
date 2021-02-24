import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  try {
    const getService = await ServiceRepository.findById(req.params.id);
    res.status(200).json(getService);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
