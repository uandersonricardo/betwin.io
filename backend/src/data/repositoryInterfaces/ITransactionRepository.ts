import User from "../../business/entities/User";

interface ITransactionRepository {
  insert(
    type: string,
    method: string,
    value: number,
    user: User
  ): Promise<void>;
}

export default ITransactionRepository;
