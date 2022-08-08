import User from "../../business/entities/User";

interface ITransactionRepository {
  insert(method: string, value: number, user: User): void;
}

export default ITransactionRepository;
