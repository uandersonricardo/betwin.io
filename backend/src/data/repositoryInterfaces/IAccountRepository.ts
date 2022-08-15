import Account from "../../business/entities/Account";
import User from "../../business/entities/User";

interface IAccountRepository {
  insert(user: string): Promise<void>;
  debitCash(userId: string, value: number): Promise<void>;
  refoundCash(userId: string, value: number): Promise<void>;
  findByUserId(userId: string): Promise<Account>;
}

export default IAccountRepository;
