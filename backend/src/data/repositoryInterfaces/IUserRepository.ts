import User from "../../business/entities/User";

interface IUserRepository {
  insert(
    username: string,
    password: string,
    email: string,
    cpf: string
  ): Promise<User>;
  validateCredentials(username: string, password: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export default IUserRepository;
