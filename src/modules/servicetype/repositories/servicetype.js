import ServiceTypeModel from "../../../models/serviceType";
import ServiceModel from "../../../models/service";

class ServiceTypeRepository {
  getAllServiceTypes() {
    return ServiceTypeModel.find();
  }
  findById(id) {
    return ServiceTypeModel.findById(id);
  }
  filtersServices(typeId) {
    return ServiceModel.find({ type: typeId });
  }
}
export default new ServiceTypeRepository();
