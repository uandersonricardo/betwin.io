import { injectable } from "tsyringe";

import User from "../entities/User";
import UserCollection from "../entityCollections/UserCollection";

@injectable()
class LoginControl {
  private userCollection;

  constructor(userCollection: UserCollection) {
    this.userCollection = userCollection;
  }

  public async login(username: string, password: string) {
    return await this.userCollection.validateCredentials(username, password);
  }

  public async registerSession(user: User) {
    return await true;
  }
}

export default LoginControl;
