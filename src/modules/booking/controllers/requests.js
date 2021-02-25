import BookingRepository from "../repositories/booking";

export default async (req, res, next) => {
  try {
    const requests = await BookingRepository.getAllMyRequestsAsOwner(
      req.params.ownerId
    );
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
