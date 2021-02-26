import ReviewRepository from "../repositories/review";

export default async (req, res, next) => {
  try {
    const reviews = await ReviewRepository.getAllMyReviews(req.params.id);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
