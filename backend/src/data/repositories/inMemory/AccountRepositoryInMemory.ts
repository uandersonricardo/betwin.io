import { singleton } from "tsyringe";

import Account from "../../../business/entities/Account";
import User from "../../../business/entities/User";
import UserFields from "../../../business/entities/UserFields";
import IAccountRepository from "../../repositoryInterfaces/IAccountRepository";

@singleton()
class AccountRepositoryInMemory implements IAccountRepository {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  insert(user: UserFields) {
    throw new Error("Method not implemented.");
  }

  changeCash(user: User, value: number) {
    throw new Error("Method not implemented.");
  }
}

export default AccountRepositoryInMemory;
