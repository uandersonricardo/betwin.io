import User from "../../business/entities/User";
import UserFields from "../../business/entities/UserFields";

interface IUserRepository {
  insert(user: UserFields): User;
  validateCredentials(username: string, password: string): User | null;
}

export default IUserRepository;
