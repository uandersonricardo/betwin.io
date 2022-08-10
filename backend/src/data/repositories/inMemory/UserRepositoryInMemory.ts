import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import User from "../../../business/entities/User";
import UserFields from "../../../business/entities/UserFields";
import IUserRepository from "../../repositoryInterfaces/IUserRepository";

@singleton()
class UserRepositoryInMemory implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async insert(user: UserFields) {
    if (
      this.users.find(
        currentUser => currentUser.getUsername() === user.getUsername()
      )
    ) {
      throw new Error("User already exists");
    }

    if (
      this.users.find(currentUser => currentUser.getEmail() === user.getEmail())
    ) {
      throw new Error("Email already exists");
    }

    if (
      this.users.find(currentUser => currentUser.getCpf() === user.getCpf())
    ) {
      throw new Error("Phone already exists");
    }

    const id = uuidv4();

    const newUser = new User(
      id,
      user.getUsername(),
      user.getPassword(),
      user.getEmail(),
      user.getCpf()
    );

    this.users.push(newUser);

    return newUser;
  }

  async validateCredentials(username: string, password: string) {
    return (
      this.users.find(
        user =>
          user.getUsername() === username && user.getPassword() === password
      ) || null
    );
  }
}

export default UserRepositoryInMemory;
