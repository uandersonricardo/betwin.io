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

  public register(user: UserFields) {
    this.userCollection.insert(user);
    this.accountCollection.insert(user);
  }
}

export default RegisterControl;
