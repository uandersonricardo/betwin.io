import { singleton } from "tsyringe";

import User from "../../../business/entities/User";
import UserFields from "../../../business/entities/UserFields";
import IUserRepository from "../../repositoryInterfaces/IUserRepository";

@singleton()
class UserRepositoryInMemory implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  insert(user: UserFields) {
    throw new Error("Method not implemented.");
  }

  exist(username: string, password: string) {
    throw new Error("Method not implemented.");

    return false;
  }
}

export default UserRepositoryInMemory;
