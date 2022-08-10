import bcrypt from "bcryptjs";

import User from "../../../business/entities/User";
import mongoose from "../../../config/db";

const AccountSchema = new mongoose.Schema({
  user: {
    type: User,
    required: true,
    lowercase: true
  },
  cash: {
    type: Number,
    required: true
  }
});

const Account = mongoose.model("User", AccountSchema);

export default Account;
