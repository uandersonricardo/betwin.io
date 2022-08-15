import { injectable } from "tsyringe";

import UserFields from "../entities/UserFields";
import AccountCollection from "../entityCollections/AccountCollection";
import UserCollection from "../entityCollections/UserCollection";

@injectable()
class RegisterControl {
  private userCollection;
  private accountCollection;

  constructor(
    userCollection: UserCollection,
    accountCollection: AccountCollection
  ) {
    this.userCollection = userCollection;
    this.accountCollection = accountCollection;
  }

  public async register(userFields: UserFields) {
    const user = await this.userCollection.insert(userFields);
    await this.accountCollection.insert(user.getId());

    return user;
  }
}

export default RegisterControl;
