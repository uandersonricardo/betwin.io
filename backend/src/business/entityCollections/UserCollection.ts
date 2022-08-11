import { inject, injectable } from "tsyringe";

import IUserRepository from "../../data/repositoryInterfaces/IUserRepository";
import UserFields from "../entities/UserFields";

@injectable()
class UserCollection {
  private userRepository;

  constructor(@inject("UserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async insert(user: UserFields) {
    return await this.userRepository.insert(user);
  }

  public async validateCredentials(username: string, password: string) {
    return await this.userRepository.validateCredentials(username, password);
  }
}

export default UserCollection;
