import ServiceModel from "../../../models/service";
import BookingModel from "../../../models/booking";

class ServiceRepository {
  findById(id) {
    return ServiceModel.findById(id);
  }
  createAService(newService) {
    return ServiceModel.create(newService);
  }
  editAService(id, updatedService) {
    return ServiceModel.findByIdAndUpdate(id, updatedService, { new: true });
  }
  removeAService(serviceId) {
    return ServiceModel.findByIdAndRemove(serviceId);
  }
  removeBookingIncludesAService(serviceId) {
    return BookingModel.deleteMany({ service: { $in: [serviceId] } });
  }
  searchByText(text) {
    return ServiceModel.find({ title: { $regex: text, $options: "i" } });
  }
  getAllMyServicesAsOwner(userId) {
    return ServiceModel.find({ owner: { $in: [userId] } }).populate("type");
  }
}
export default new ServiceRepository();
