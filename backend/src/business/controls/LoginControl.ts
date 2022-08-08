import { injectable } from "tsyringe";

import UserCollection from "../entityCollections/UserCollection";

@injectable()
class LoginControl {
  private userCollection;

  constructor(userCollection: UserCollection) {
    this.userCollection = userCollection;
  }

  public login(username: string, password: string) {
    this.userCollection.exist(username, password);
  }

  public registerSession() {
    return null;
  }
}

export default LoginControl;
