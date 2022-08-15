import { singleton } from "tsyringe";

import Account from "../../../business/entities/Account";
import User from "../../../business/entities/User";
import IAccountRepository from "../../repositoryInterfaces/IAccountRepository";
import AccountSchema from "../../schemas/mongo/Account";
import { IUserSchema } from "../../schemas/mongo/User";

@singleton()
class AccountRepositoryMongo implements IAccountRepository {
  public async insert(userId: string) {
    if (await AccountSchema.findOne({ user: userId })) {
      throw new Error("User already exists");
    }

    await AccountSchema.create({
      user: userId,
      cash: 0
    });
  }

  public async debitCash(userId: string, value: number) {
    const account = await AccountSchema.findOne({ user: userId });

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
    const account = await AccountSchema.findOne({ user: userId });

    if (!account) {
      throw new Error("Account not found");
    }

    account.cash += value;

    await account.save();
  }

  public async findByUserId(userId: string) {
    const mongoAccount = await AccountSchema.findOne({
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
