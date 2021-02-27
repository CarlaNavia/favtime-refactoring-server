import BookingModel from "../../../models/booking";
import ServiceModel from "../../../models/service";
import UserModel from "../../../models/user";

class BookingRepository {
  findAService(id) {
    return ServiceModel.findById(id);
  }
  findABooking(id) {
    return BookingModel.findById(id);
  }
  createABooking(newBooking) {
    return BookingModel.create(newBooking);
  }
  getAllMyRequestsAsOwner(ownerId) {
    return BookingModel.find({ owner: { $in: [ownerId] } })
      .populate("service")
      .populate("client");
  }
  getAllMyBookingsAsClient(clientId) {
    return BookingModel.find({ client: { $in: [clientId] } })
      .populate("service")
      .populate("owner");
  }
  updateBookingStatus(bookingId, updatedStatus) {
    return BookingModel.findByIdAndUpdate(
      bookingId,
      { status: updatedStatus },
      {
        new: true,
      }
    );
  }
  updateCreditsFromAcceptedBooking(userId, updatedCredits) {
    return UserModel.findByIdAndUpdate(
      userId,
      { $inc: { credits: updatedCredits } },
      { new: true }
    );
  }
  myCredits(userId) {
    return UserModel.findById(userId);
  }
}
export default new BookingRepository();
