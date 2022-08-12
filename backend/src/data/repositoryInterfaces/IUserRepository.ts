import User from "../../business/entities/User";
import UserFields from "../../business/entities/UserFields";

interface IUserRepository {
  insert(user: UserFields): Promise<User>;
  validateCredentials(username: string, password: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export default IUserRepository;
