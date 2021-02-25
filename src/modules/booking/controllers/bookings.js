import BookingRepository from "../repositories/booking";

export default async (req, res, next) => {
  try {
    const bookings = await BookingRepository.getAllMyBookingsAsClient(
      req.params.clientId
    );
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
