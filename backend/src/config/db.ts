import mongoose from "mongoose";

import environment from "../config/environment";

mongoose.connect(environment.mongoUrl || "");

export default mongoose;
