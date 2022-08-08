import User from "../../business/entities/User";

interface IDepositRepository {
  insert(method: string, value: number, user: User): void;
}

export default IDepositRepository;
