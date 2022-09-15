import { inject, injectable } from "tsyringe";

import IAccountRepository from "./IAccountRepository";

@injectable()
class AccountCollection {
  private accountRepository;

  constructor(
    @inject("AccountRepository") accountRepository: IAccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  public async insert(userId: string) {
    return await this.accountRepository.insert(userId);
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
