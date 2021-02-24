import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  try {
    const serviceToUpdate = await ServiceRepository.editAService(
      req.params.id,
      req.body
    );
    res.status(200).json(serviceToUpdate);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
