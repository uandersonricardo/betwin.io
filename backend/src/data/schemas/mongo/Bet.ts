import bcrypt from "bcryptjs";

import BetOdd from "../../../business/entities/BetOdd";
import Match from "../../../business/entities/Match";
import User from "../../../business/entities/User";
import mongoose from "../../../config/db";

const BetSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  odd: {
    type: BetOdd,
    required: true
  },
  user: {
    type: User,
    unique: true,
    required: true,
    lowercase: true
  },
  match: {
    type: Match,
    required: true
  }
});

const Bet = mongoose.model("Transaction", BetSchema);

export default Bet;
