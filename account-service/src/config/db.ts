import mongoose from "mongoose";

import environment from "./environment";

mongoose.connect(environment.mongoUrl || "", {
  dbName: "betwin-io"
});

export default mongoose;
