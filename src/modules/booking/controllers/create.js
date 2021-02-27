import BookingRepository from "../repositories/booking";

export default async (req, res, next) => {
  const userId = req.user.userId;
  const { date, time, comments } = req.body;

  try {
    const oneService = await BookingRepository.findAService(req.params.id);
    if (!oneService) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
    if (oneService.owner == req.user.userId) {
      res.status(400).json({
        message: "You are not allowed due to you are the owner of the service.",
      });
      return;
    }

    const user = await BookingRepository.myCredits(req.user.userId);
    if (oneService.credits > user.credits) {
      res.status(400).json({
        message: "You don't have enough credits to book this service.",
      });
      return;
    }
    const newBooking = await BookingRepository.createABooking({
      date,
      time,
      comments,
      client: userId,
      owner: oneService.owner,
      service: req.params.id,
    });

    res.status(200).json(newBooking);
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error creating the booking" });
  }
};
