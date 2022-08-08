import IAccountRepository from "../../data/IRepository/IAccountRepository";
import User from "../entities/User";
import UserFields from "../entities/UserFields";

class AccountRegister {
  private accountRepository;

  constructor(accountRepository: IAccountRepository) {
    this.accountRepository = accountRepository;
  }

  public insert(user: UserFields) {
    this.accountRepository.insert(user);
  }

  public changeCash(user: User, value: number) {
    this.accountRepository.changeCash(user, value);
  }
}

export default AccountRegister;
