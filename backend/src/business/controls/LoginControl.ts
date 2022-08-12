import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";

import authConfig from "../../config/auth";
import User from "../entities/User";
import UserCollection from "../entityCollections/UserCollection";

@injectable()
class LoginControl {
  private userCollection;

  constructor(userCollection: UserCollection) {
    this.userCollection = userCollection;
  }

  private generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
  };

  public async login(username: string, password: string) {
    const user = await this.userCollection.validateCredentials(
      username,
      password
    );

    user.setPassword(undefined);

    return user;
  }

  public async registerSession(user: User) {
    const token = this.generateToken({ id: user.getId() });

    return token;
  }
}

export default LoginControl;
