import Account from "../../business/entities/Account";
import User from "../../business/entities/User";

interface IAccountRepository {
  insert(user: User): Promise<Account>;
  changeCash(user: User, value: number): Promise<void>;
  findByUserId(userId: string): Promise<Account>;
}

export default IAccountRepository;
