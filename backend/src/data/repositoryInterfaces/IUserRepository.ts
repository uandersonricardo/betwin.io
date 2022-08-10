import User from "../../business/entities/User";
import UserFields from "../../business/entities/UserFields";

interface IUserRepository {
  insert(user: UserFields): Promise<User>;
  validateCredentials(username: string, password: string): Promise<User | null>;
}

export default IUserRepository;