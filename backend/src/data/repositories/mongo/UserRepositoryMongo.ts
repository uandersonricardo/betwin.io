import { compare, hash } from "bcryptjs";
import { singleton } from "tsyringe";

import User from "../../../business/entities/User";
import IUserRepository from "../../repositoryInterfaces/IUserRepository";
import UserSchema from "../../schemas/mongo/User";

@singleton()
class UserRepositoryMongo implements IUserRepository {
  public async insert(
    username: string,
    password: string,
    email: string,
    cpf: string
  ) {
    if (await UserSchema.findOne({ username })) {
      throw new Error("Username already exists");
    }

    if (await UserSchema.findOne({ email })) {
      throw new Error("Email already exists");
    }

    if (await UserSchema.findOne({ cpf })) {
      throw new Error("CPF already in use");
    }

    const hashedPassword = await hash(password, 10);

    const mongoUser = await UserSchema.create({
      username,
      password: hashedPassword,
      email,
      cpf
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

  public async validateCredentials(username: string, password: string) {
    const mongoUser = await UserSchema.findOne({
      username
    });

    if (!mongoUser) {
      throw new Error("User not found");
    }

    if (!(await compare(password, mongoUser.password))) {
      throw new Error("Invalid password");
    }

    const user = new User(
      mongoUser._id.toString(),
      mongoUser.username,
      mongoUser.password,
      mongoUser.email,
      mongoUser.cpf
    );

    return user;
  }

  public async findById(id: string) {
    const mongoUser = await UserSchema.findOne({
      _id: id
    });

    if (!mongoUser) {
      throw new Error("User not found");
    }

    const user = new User(
      mongoUser._id.toString(),
      mongoUser.username,
      mongoUser.password,
      mongoUser.email,
      mongoUser.cpf
    );

    return user;
  }
}

export default UserRepositoryMongo;
