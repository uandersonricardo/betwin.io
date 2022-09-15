import { container, inject, injectable, singleton } from "tsyringe";

import LoginControl from "../controls/LoginControl";
import MeControl from "../controls/MeControl";
import RegisterControl from "../controls/RegisterControl";
import IRepositoryFactory from "../factories/IRepositoryFactory";
import IUserRepository from "../user/IUserRepository";

@injectable()
@singleton()
class Facade {
  private repositoryFactory;
  private registerControl;
  private loginControl;
  private meControl;

  constructor(
    @inject("RepositoryFactory") repositoryFactory: IRepositoryFactory
  ) {
    this.repositoryFactory = repositoryFactory;

    container.register<IUserRepository>("UserRepository", {
      useValue: this.repositoryFactory.createUserRepository()
    });

    this.registerControl = container.resolve(RegisterControl);
    this.loginControl = container.resolve(LoginControl);
    this.meControl = container.resolve(MeControl);
  }

  public async register(
    username: string,
    password: string,
    email: string,
    cpf: string
  ) {
    return await this.registerControl.register(username, password, email, cpf);
  }

  public async login(username: string, password: string) {
    return await this.loginControl.login(username, password);
  }

  public async registerSession(userId: string) {
    return await this.loginControl.registerSession(userId);
  }

  public async me(id: string) {
    return await this.meControl.me(id);
  }
}

export default Facade;
