import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  const {
    title,
    description,
    typeId,
    availableTime,
    city,
    address,
    credits,
    owner,
  } = req.body;
  try {
    const newService = await ServiceRepository.createAService({
      title,
      description,
      type: typeId,
      availableTime,
      city,
      address,
      credits,
      owner,
    });

    res.status(200).json(newService);
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error creating the service" });
  }
};
