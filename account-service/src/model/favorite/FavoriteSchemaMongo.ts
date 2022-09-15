import mongoose from "../../config/db";

export interface IFavoriteSchemaMongo {
  _id: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  match: string;
}

const FavoriteSchemaMongo = new mongoose.Schema<IFavoriteSchemaMongo>({
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

const Favorite = mongoose.model("Favorite", FavoriteSchemaMongo);

export default Favorite;
