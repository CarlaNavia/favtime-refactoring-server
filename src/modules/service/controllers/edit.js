import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  try {
    const oneService = await ServiceRepository.findById(req.params.id);

    if (oneService.owner == req.user.userId) {
      const serviceToUpdate = await ServiceRepository.editAService(
        req.params.id,
        req.body
      );
      res.status(200).json(serviceToUpdate);
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
