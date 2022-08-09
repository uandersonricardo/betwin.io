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

  public register(userFields: UserFields) {
    const user = this.userCollection.insert(userFields);
    this.accountCollection.insert(user);

    return user;
  }
}

export default RegisterControl;
