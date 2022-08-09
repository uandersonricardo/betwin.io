import { injectable } from "tsyringe";

import User from "../entities/User";
import UserCollection from "../entityCollections/UserCollection";

@injectable()
class LoginControl {
  private userCollection;

  constructor(userCollection: UserCollection) {
    this.userCollection = userCollection;
  }

  public login(username: string, password: string) {
    return this.userCollection.validateCredentials(username, password);
  }

  public registerSession(user: User) {
    return true;
  }
}

export default LoginControl;
