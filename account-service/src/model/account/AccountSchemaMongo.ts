import mongoose from "../../config/db";

export interface IAccountSchemaMongo {
  _id: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  cash: number;
}

const AccountSchemaMongo = new mongoose.Schema<IAccountSchemaMongo>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  cash: {
    type: Number,
    required: true
  }
});

const Account = mongoose.model("Account", AccountSchemaMongo);

export default Account;
