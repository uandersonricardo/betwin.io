import bcrypt from "bcryptjs";

import Match from "../../../business/entities/Match";
import User from "../../../business/entities/User";
import mongoose from "../../../config/db";

const FavoriteSchema = new mongoose.Schema({
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

const Favorite = mongoose.model("Transaction", FavoriteSchema);

export default Favorite;
