import IUserRepository from "../../data/IRepository/IUserRepository";
import UserFields from "../entities/UserFields";

class UserRegister {
  private userRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public insert(user: UserFields) {
    this.userRepository.insert(user);
  }

  public exist(username: string, password: string) {
    this.userRepository.exist(username, password);
  }
}

export default UserRegister;
