import Account from "../../business/entities/Account";
import User from "../../business/entities/User";

interface IAccountRepository {
  insert(user: User): Account;
  changeCash(user: User, value: number): void;
}

export default IAccountRepository;
