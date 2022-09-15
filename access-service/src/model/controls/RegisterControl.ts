import { injectable } from "tsyringe";

import UserCollection from "../user/UserCollection";

@injectable()
class RegisterControl {
  private userCollection;

  constructor(userCollection: UserCollection) {
    this.userCollection = userCollection;
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
    // await this.accountCollection.insert(user.getId());

    return user;
  }
}

export default RegisterControl;
