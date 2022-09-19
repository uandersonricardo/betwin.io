import { singleton } from "tsyringe";

import Account from "./Account";
import AccountSchemaMongo from "./AccountSchemaMongo";
import IAccountRepository from "./IAccountRepository";

@singleton()
class AccountRepositoryMongo implements IAccountRepository {
  public async insert(userId: string) {
    if (await AccountSchemaMongo.findOne({ user: userId })) {
      throw new Error("User already exists");
    }

    await AccountSchemaMongo.create({
      user: userId,
      cash: 0
    });
  }

  public async debitCash(userId: string, value: number) {
    const account = await AccountSchemaMongo.findOne({ user: userId });

    if (!account) {
      throw new Error("Account not found");
    }

    if (account.cash - value < 0) {
      throw new Error("Not enough cash");
    }

    account.cash -= value;

    await account.save();
  }

  public async refoundCash(userId: string, value: number) {
    const account = await AccountSchemaMongo.findOne({ user: userId });

    if (!account) {
      throw new Error("Account not found");
    }

    account.cash += value;

    await account.save();
  }

  public async findByUserId(userId: string) {
    const mongoAccount = await AccountSchemaMongo.findOne({
      user: userId
    });

    if (!mongoAccount) {
      throw new Error("Account not found");
    }

    const account = new Account(userId, mongoAccount.cash);

    return account;
  }
}

export default AccountRepositoryMongo;
