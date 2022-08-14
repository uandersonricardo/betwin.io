import Transaction from "../../business/entities/Transaction";

interface ITransactionRepository {
  insert(
    type: string,
    method: string,
    value: number,
    user: string,
    status: string,
    date: Date
  ): Promise<Transaction>;
}

export default ITransactionRepository;
