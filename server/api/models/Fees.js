import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
var FessSchema = new mongoose.Schema(
    {
      coursename: {
          type: String,
          require: true,
      },
      fees: {
        type: Number,
        require: true, 
      },
    }
  )
  autoIncrement.initialize(mongoose.connection);
  StudentSchema.plugin(autoIncrement.plugin, {
    model: "Fees", 
    field: "_id", 
    startAt: 101, 
    incrementBy: 1, 
  });
  
  export default mongoose.model("Fees", FeesSchema);