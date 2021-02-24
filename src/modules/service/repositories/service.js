import ServiceModel from "../../../models/service";
import ServiceTypeModel from "../../../models/serviceType"

class ServiceRepository {
  findById(id) {
    return ServiceModel.findById(id);
  }
  createAService(newService) {
    return ServiceModel.create(newService);
  }

  getAllServices() {
    return ServiceModel.find();
  }
  editAService(id, updatedService) {
    return ServiceModel.findByIdAndUpdate(id, updatedService, { new: true });
  }
  removeAService(serviceId) {
    return ServiceModel.findByIdAndRemove(serviceId);
  }
  searchByText(text) {
    return ServiceModel.find({ title: { $regex: text, $options: "i" } });
  }
}
export default new ServiceRepository();
