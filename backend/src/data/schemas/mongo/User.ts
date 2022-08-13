import mongoose from "../../../config/db";

export interface IUserSchema {
  _id: mongoose.Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  cpf: string;
}

const UserSchema = new mongoose.Schema<IUserSchema>({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
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

const User = mongoose.model("User", UserSchema);

export default User;
