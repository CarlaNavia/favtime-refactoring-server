import ServiceTypeModel from "../../../models/serviceType";

class ServiceTypeRepository {
  getAllServiceTypes() {
    return ServiceTypeModel.find();
  }
  findById(id) {
    return ServiceTypeModel.findById(id);
  }
}
export default new ServiceTypeRepository();
