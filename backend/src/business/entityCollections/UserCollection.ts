import { inject, injectable } from "tsyringe";

import IUserRepository from "../../data/repositoryInterfaces/IUserRepository";
import UserFields from "../entities/UserFields";

@injectable()
class UserCollection {
  private userRepository;

  constructor(@inject("UserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public insert(user: UserFields) {
    this.userRepository.insert(user);
  }

  public exist(username: string, password: string) {
    this.userRepository.exist(username, password);
  }
}

export default UserCollection;
