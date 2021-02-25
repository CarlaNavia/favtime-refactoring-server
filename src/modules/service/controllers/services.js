import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  try {
    const services = await ServiceRepository.getAllMyServicesAsOwner(
      req.params.userId
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};