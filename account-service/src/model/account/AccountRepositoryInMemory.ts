import { singleton } from "tsyringe";

import Account from "./Account";
import IAccountRepository from "./IAccountRepository";

@singleton()
class AccountRepositoryInMemory implements IAccountRepository {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  public async insert(userId: string) {
    if (
      this.accounts.find(
        currentAccount => currentAccount.getUserId() === userId
      )
    ) {
      throw new Error("User already exists");
    }

    const newAccount = new Account(userId, 0);

    this.accounts.push(newAccount);
  }

  public async debitCash(userId: string, value: number) {
    const index = this.accounts.findIndex(
      currentAccount => currentAccount.getUserId() === userId
    );

    if (index && this.accounts[index].getCash() - value < 0.0) {
      throw new Error("Not enough cash");
    }

    this.accounts[index].setCash(this.accounts[index].getCash() - value);
  }

  public async refoundCash(userId: string, value: number) {
    const index = this.accounts.findIndex(
      currentAccount => currentAccount.getUserId() === userId
    );

    this.accounts[index].setCash(this.accounts[index].getCash() + value);
  }

  public async findByUserId(userId: string) {
    const foundAccount = this.accounts.find(
      currentAccount => currentAccount.getUserId() === userId
    );

    if (!foundAccount) {
      throw new Error("Account not found");
    }

    const account = new Account(
      foundAccount.getUserId(),
      foundAccount.getCash()
    );

    return account;
  }
}

export default AccountRepositoryInMemory;
