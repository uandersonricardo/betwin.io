import User from "../../business/entities/User";
import UserFields from "../../business/entities/UserFields";

interface IAccountRepository {
  insert(user: UserFields): void;

  changeCash(user: User, value: number): void;
}

export default IAccountRepository;
