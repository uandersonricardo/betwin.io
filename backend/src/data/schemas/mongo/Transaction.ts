import bcrypt from "bcryptjs";

import User from "../../../business/entities/User";
import mongoose from "../../../config/db";

const TransactionSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
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
    type: User,
    unique: true,
    required: true,
    lowercase: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
