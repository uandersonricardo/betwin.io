import mongoose from "mongoose";

import environment from "../config/environment";

mongoose.connect(environment.mongoUrl || "", {
  dbName: "betwin-io"
});

export default mongoose;
