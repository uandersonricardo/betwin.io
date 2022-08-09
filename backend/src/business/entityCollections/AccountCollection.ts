import { inject, injectable } from "tsyringe";

import IAccountRepository from "../../data/repositoryInterfaces/IAccountRepository";
import User from "../entities/User";

@injectable()
class AccountCollection {
  private accountRepository;

  constructor(
    @inject("AccountRepository") accountRepository: IAccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  public insert(user: User) {
    return this.accountRepository.insert(user);
  }

  public changeCash(user: User, value: number) {
    this.accountRepository.changeCash(user, value);
  }
}

export default AccountCollection;
