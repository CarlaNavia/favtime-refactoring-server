import ReviewRepository from "../repositories/review";

export default async (req, res, next) => {
  const userId = req.user.userId;
  const { review, rating } = req.body;

  try {
    const oneBooking = await ReviewRepository.findABooking(req.params.id);

    if (!oneBooking) {
      res.status(400).json({ message: "Specified id is not valid" });
    }
    if (
      oneBooking.client == req.user.userId &&
      oneBooking.status === "accepted"
    ) {
      const newReview = await ReviewRepository.createAReview({
        booking: req.params.id,
        author: userId,
        user: oneBooking.owner,
        service: oneBooking.service,
        review,
        rating,
      });

      res.status(200).json(newReview);
    } else {
      res.status(400).json({
        message:
          "You are not allowed to write a review in this booking due to you are not a client.",
      });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "There was an error creating the review" });
  }
};
