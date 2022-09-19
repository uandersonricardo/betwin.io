import mongoose from "../../config/db";

export interface IBetSchemaMongo {
  _id: mongoose.Schema.Types.ObjectId;
  value: number;
  odd: {
    option: string;
    value: number;
  };
  user: mongoose.Schema.Types.ObjectId;
  match: string;
}

const BetSchemaMongo = new mongoose.Schema<IBetSchemaMongo>({
  value: {
    type: Number,
    required: true
  },
  odd: {
    type: {
      option: { type: String, required: true },
      value: { type: Number, required: true }
    },
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  match: {
    type: String,
    required: true
  }
});

const Bet = mongoose.model("Bet", BetSchemaMongo);

export default Bet;
