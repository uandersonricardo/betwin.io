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

  public async insert(user: User) {
    return await this.accountRepository.insert(user);
  }

  public async debitCash(userId: string, value: number) {
    await this.accountRepository.debitCash(userId, value);
  }

  public async refoundCash(userId: string, value: number) {
    await this.accountRepository.refoundCash(userId, value);
  }

  public async findByUserId(userId: string) {
    return await this.accountRepository.findByUserId(userId);
  }
}

export default AccountCollection;
