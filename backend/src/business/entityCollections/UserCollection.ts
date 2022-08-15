import { inject, injectable } from "tsyringe";

import IUserRepository from "../../data/repositoryInterfaces/IUserRepository";

@injectable()
class UserCollection {
  private userRepository;

  constructor(@inject("UserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async insert(
    username: string,
    password: string,
    email: string,
    cpf: string
  ) {
    return await this.userRepository.insert(username, password, email, cpf);
  }

  public async validateCredentials(username: string, password: string) {
    return await this.userRepository.validateCredentials(username, password);
  }

  public async findById(id: string) {
    return await this.userRepository.findById(id);
  }
}

export default UserCollection;
