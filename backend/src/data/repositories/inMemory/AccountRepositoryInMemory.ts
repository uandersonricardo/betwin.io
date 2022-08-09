import { singleton } from "tsyringe";

import Account from "../../../business/entities/Account";
import User from "../../../business/entities/User";
import IAccountRepository from "../../repositoryInterfaces/IAccountRepository";

@singleton()
class AccountRepositoryInMemory implements IAccountRepository {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  insert(user: User) {
    const newAccount = new Account(user, 0);

    this.accounts.push(newAccount);

    return newAccount;
  }

  changeCash(user: User, value: number) {
    throw new Error("Method not implemented.");
  }
}

export default AccountRepositoryInMemory;
