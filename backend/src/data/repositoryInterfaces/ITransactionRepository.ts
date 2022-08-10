import User from "../../business/entities/User";

interface ITransactionRepository {
  insert(method: string, value: number, user: User): Promise<void>;
}

export default ITransactionRepository;
