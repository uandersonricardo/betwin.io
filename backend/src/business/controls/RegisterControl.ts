import { injectable } from "tsyringe";

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

  public async register(
    username: string,
    password: string,
    email: string,
    cpf: string
  ) {
    const user = await this.userCollection.insert(
      username,
      password,
      email,
      cpf
    );
    await this.accountCollection.insert(user.getId());

    return user;
  }
}

export default RegisterControl;
