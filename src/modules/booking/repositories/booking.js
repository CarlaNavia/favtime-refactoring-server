import BookingModel from "../../../models/booking";
import ServiceModel from "../../../models/service";

class BookingRepository {
  findAService(id) {
    return ServiceModel.findById(id);
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
}
export default new BookingRepository();
