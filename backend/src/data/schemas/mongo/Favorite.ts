import mongoose from "../../../config/db";

export interface IFavoriteSchema {
  _id: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  match: string;
}

const FavoriteSchema = new mongoose.Schema<IFavoriteSchema>({
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

const Favorite = mongoose.model("Favorite", FavoriteSchema);

export default Favorite;
