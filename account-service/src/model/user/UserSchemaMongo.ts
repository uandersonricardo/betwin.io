import mongoose from "../../config/db";

export interface IUserSchemaMongo {
  _id: mongoose.Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  cpf: string;
}

const UserSchemaMongo = new mongoose.Schema<IUserSchemaMongo>({
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

const User = mongoose.model("User", UserSchemaMongo);

export default User;
