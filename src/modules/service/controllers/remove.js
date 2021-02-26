import ServiceRepository from "../repositories/service";

export default async (req, res, next) => {
  try {
    const deleteServiceFromBooking = await ServiceRepository.removeBookingIncludesAService(
      req.params.id
    );
    const serviceRemoved = await ServiceRepository.removeAService(
      req.params.id
    );
    const myServices = await ServiceRepository.getAllMyServicesAsOwner(
      req.user.userId
    );
    res.status(200).json(myServices);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
