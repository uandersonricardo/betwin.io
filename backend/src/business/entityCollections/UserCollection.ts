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
    return this.userRepository.insert(user);
  }

  public validateCredentials(username: string, password: string) {
    return this.userRepository.validateCredentials(username, password);
  }
}

export default UserCollection;
