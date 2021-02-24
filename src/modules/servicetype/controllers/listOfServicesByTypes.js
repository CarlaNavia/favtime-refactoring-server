import ServiceTypeRepository from "../repositories/servicetype";

export default async (req, res, next) => {
  try {
    const list = await ServiceTypeRepository.filtersServices(req.params.id);

    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
