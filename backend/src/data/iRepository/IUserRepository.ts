import UserFields from "../../business/entities/UserFields";

interface IUserRepository {
  insert(user: UserFields): void;

  exist(username: string, password: string): boolean;
}

export default IUserRepository;
