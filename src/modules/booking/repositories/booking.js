import BookingModel from "../../../models/booking";
import ServiceModel from "../../../models/service";

class BookingRepository {
  findAService(id) {
    return ServiceModel.findById(id)
  }
  createABooking(newBooking) {
    return BookingModel.create(newBooking);
  }
}
export default new BookingRepository();
