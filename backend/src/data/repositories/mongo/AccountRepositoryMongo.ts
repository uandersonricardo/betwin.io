import { singleton } from "tsyringe";

import Account from "../../../business/entities/Account";
import User from "../../../business/entities/User";
import IAccountRepository from "../../repositoryInterfaces/IAccountRepository";
import AccountSchema from "../../schemas/mongo/Account";
import { IUserSchema } from "../../schemas/mongo/User";

@singleton()
class AccountRepositoryMongo implements IAccountRepository {
  public async insert(user: User) {
    if (await AccountSchema.findOne({ user: user.getId() })) {
      throw new Error("User already exists");
    }

    const mongoAccount = await AccountSchema.create({
      user: user.getId(),
      cash: 0
    });

    const newAccount = new Account(user, mongoAccount.cash);

    return newAccount;
  }

  public async changeCash(user: User, value: number) {
    const account = await AccountSchema.findOne({ user: user.getId() });

    if (!account) {
      throw new Error("Account not found");
    }

    if (account.cash - value < 0) {
      throw new Error("Not enough cash");
    }

    account.cash -= value;

    await account.save();
  }

  public async findByUserId(userId: string) {
    const mongoAccount = await AccountSchema.findOne({
      user: userId
    }).populate<{ user: IUserSchema }>(["user"]);

    if (!mongoAccount) {
      throw new Error("Account not found");
    }

    const account = new Account(
      new User(
        mongoAccount.user._id.toString(),
        mongoAccount.user.username,
        undefined,
        mongoAccount.user.email,
        mongoAccount.user.cpf
      ),
      mongoAccount.cash
    );

    return account;
  }
}

export default AccountRepositoryMongo;
