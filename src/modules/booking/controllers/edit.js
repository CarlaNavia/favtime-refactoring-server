import BookingRepository from "../repositories/booking";

export default async (req, res, next) => {
  try {
    const oneBooking = await BookingRepository.findABooking(
      req.params.bookingId
    );
    if (!oneBooking) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
    if (
      req.params.status !== "accepted" &&
      req.params.status !== "declined" &&
      req.params.status !== "pending"
    ) {
      res.status(400).json({
        message: "This status is not allowed.",
      });
    }

    const oneService = await BookingRepository.findAService(oneBooking.service);

    if (oneBooking.owner == req.user.userId) {
      const bookingUpdated = await BookingRepository.updateBookingStatus(
        req.params.bookingId,
        req.params.status
      );

      if (req.params.status === "accepted") {
        await BookingRepository.updateCreditsFromAcceptedBooking(
          oneBooking.owner,
          oneService.credits
        );
        await BookingRepository.updateCreditsFromAcceptedBooking(
          oneBooking.client,
          -oneService.credits
        );
      }

      res.status(200).json(bookingUpdated);
    } else {
      res.status(400).json({
        message: "You are not allowed due to you are the owner of the service.",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
