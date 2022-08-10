import { singleton } from "tsyringe";

import Account from "../../../business/entities/Account";
import User from "../../../business/entities/User";
import IAccountRepository from "../../repositoryInterfaces/IAccountRepository";
import AccountSchema from "../../schemas/mongo/Account";

@singleton()
class AccountRepositoryMongo implements IAccountRepository {
  async insert(user: User) {
    if (await AccountSchema.findOne({ user })) {
      throw new Error("user already exists");
    }

    const mongoAccount = await AccountSchema.create({
      user,
      cash: 0
    });

    const newAccount = new Account(user, mongoAccount.cash);

    return newAccount;
  }

  async changeCash(user: User, value: number) {
    const account = await AccountSchema.findOne({ user });

    if (!account) {
      throw new Error("Account not found");
    }

    if (account.cash - value < 0) {
      throw new Error("Not enough cash");
    }

    await AccountSchema.findOneAndUpdate(
      { user },
      { cash: account.cash - value }
    );
  }
}

export default AccountRepositoryMongo;
