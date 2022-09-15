import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";

import auth from "../../config/auth";
import UserCollection from "../user/UserCollection";

@injectable()
class LoginControl {
  private userCollection;

  constructor(userCollection: UserCollection) {
    this.userCollection = userCollection;
  }

  private generateToken = (params = {}) => {
    return jwt.sign(params, auth.secret, { expiresIn: auth.expiresIn });
  };

  public async login(username: string, password: string) {
    const user = await this.userCollection.validateCredentials(
      username,
      password
    );

    user.setPassword(undefined);

    return user;
  }

  public async registerSession(userId: string) {
    const token = this.generateToken({ id: userId });

    return token;
  }
}

export default LoginControl;
