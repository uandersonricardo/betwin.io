import { injectable } from "tsyringe";

import UserCollection from "../entityCollections/UserCollection";

@injectable()
class MeControl {
  private userCollection;

  constructor(userCollection: UserCollection) {
    this.userCollection = userCollection;
  }

  public async me(id: string) {
    const user = await this.userCollection.findById(id);

    user.setPassword(undefined);

    return user;
  }
}

export default MeControl;
