import { singleton } from "tsyringe";

import User from "../../../business/entities/User";
import UserFields from "../../../business/entities/UserFields";
import IUserRepository from "../../repositoryInterfaces/IUserRepository";
import UserSchema from "../../schemas/mongo/User";

@singleton()
class UserRepositoryMongo implements IUserRepository {
  async insert(user: UserFields) {
    if (await UserSchema.findOne({ username: user.getUsername() })) {
      throw new Error("username already exists");
    }

    if (await UserSchema.findOne({ email: user.getEmail() })) {
      throw new Error("Email already exists");
    }

    if (await UserSchema.findOne({ cpf: user.getCpf() })) {
      throw new Error("CPF already in use");
    }

    const mongoUser = await UserSchema.create({
      username: user.getUsername(),
      password: user.getPassword(),
      email: user.getEmail(),
      cpf: user.getCpf()
    });

    const newUser = new User(
      mongoUser._id.toString(),
      mongoUser.username,
      mongoUser.password,
      mongoUser.email,
      mongoUser.cpf
    );

    return newUser;
  }

  async validateCredentials(username: string, password: string) {
    const mongoUser = await UserSchema.findOne({
      username,
      password
    });

    if (!mongoUser) {
      throw new Error("User not found");
    }
    const newUser = new User(
      mongoUser._id.toString(),
      mongoUser.username,
      mongoUser.password,
      mongoUser.email,
      mongoUser.cpf
    );

    return newUser;
  }
}

export default UserRepositoryMongo;
