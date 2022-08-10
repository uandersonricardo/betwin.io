import bcrypt from "bcryptjs";

import mongoose from "../../../config/db";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  }
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model("User", UserSchema);

export default User;