import BookingModel from "../../../models/booking";
import ReviewModel from "../../../models/review";

class ReviewRepository {
  findABooking(id) {
    return BookingModel.findById(id);
  }
  createAReview(newReview) {
    return ReviewModel.create(newReview);
  }
  getAllMyReviews(userId) {
    return ReviewModel.find({ user: { $in: [userId] } })
      .populate("author")
      .populate("service");
  }
}
export default new ReviewRepository();
