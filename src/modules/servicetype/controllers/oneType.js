import ServiceTypeRepository from "../repositories/servicetype";

export default async (req, res, next) => {
  try {
    const getType = await ServiceTypeRepository.findById(
      req.params.id
    ).populate("services");
    res.status(200).json(getType);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
