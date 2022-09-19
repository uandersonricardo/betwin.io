import mongoose from "../../config/db";

export interface ITransactionSchemaMongo {
  _id: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  value: number;
  type: string;
  method: string;
  status: string;
  date: Date;
}

const TransactionSchemaMongo = new mongoose.Schema<ITransactionSchemaMongo>({
  type: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Transaction = mongoose.model("Transaction", TransactionSchemaMongo);

export default Transaction;
