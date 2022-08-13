import mongoose from "../../../config/db";

export interface IAccountSchema {
  _id: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  cash: number;
}

const AccountSchema = new mongoose.Schema<IAccountSchema>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  cash: {
    type: Number,
    required: true
  }
});

const Account = mongoose.model("Account", AccountSchema);

export default Account;
