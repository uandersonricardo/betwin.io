import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import User from "../../../business/entities/User";
import IUserRepository from "../../repositoryInterfaces/IUserRepository";

@singleton()
class UserRepositoryInMemory implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public async insert(
    username: string,
    password: string,
    email: string,
    cpf: string
  ) {
    if (
      this.users.find(currentUser => currentUser.getUsername() === username)
    ) {
      throw new Error("User already exists");
    }

    if (this.users.find(currentUser => currentUser.getEmail() === email)) {
      throw new Error("Email already exists");
    }

    if (this.users.find(currentUser => currentUser.getCpf() === cpf)) {
      throw new Error("Phone already exists");
    }

    const id = uuidv4();

    const newUser = new User(id, username, password, email, cpf);

    this.users.push(newUser);

    return newUser;
  }

  public async validateCredentials(username: string, password: string) {
    const foundUser = this.users.find(
      user => user.getUsername() === username && user.getPassword() === password
    );

    if (!foundUser) {
      throw new Error("User not found");
    }

    const user = new User(
      foundUser.getId(),
      foundUser.getUsername(),
      foundUser.getPassword(),
      foundUser.getEmail(),
      foundUser.getCpf()
    );

    return user;
  }

  public async findById(id: string) {
    const foundUser = this.users.find(user => user.getId() === id);

    if (!foundUser) {
      throw new Error("User not found");
    }

    const user = new User(
      foundUser.getId(),
      foundUser.getUsername(),
      foundUser.getPassword(),
      foundUser.getEmail(),
      foundUser.getCpf()
    );

    return user;
  }
}

export default UserRepositoryInMemory;
