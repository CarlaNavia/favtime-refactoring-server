import UserModel from "../../../models/user";

class UserRepository {
  findByEmail(email) {
    return UserModel.findOne({ email: email });
  }
  findById(userId) {
    return UserModel.findById(userId);
  }
  createUser(newUser) {
    return UserModel.create(newUser);
  }
}
export default new UserRepository();
