import ServiceTypeRepository from "../repositories/servicetype";

export default async (req, res, next) => {
  try {
    const types = await ServiceTypeRepository.getAllServiceTypes();

    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
