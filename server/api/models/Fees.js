import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
var FeesSchema = new mongoose.Schema(
    {
      totalFees: {
        type: Number,
        require: true, 
      },
      year: {
        type: Number,
        require: true, 
      },
      CourseName: {
        type: String,
        require: true,
      },
      CourseIds: {
        type: [String],
      },
      StudentIds: {
        type: [String],
      },
    }
  )
  autoIncrement.initialize(mongoose.connection);
  FeesSchema.plugin(autoIncrement.plugin, {
    model: "Fees", 
    field: "_id", 
    startAt: 2001, 
    incrementBy: 1, 
  });
  
  export default mongoose.model("Fees", FeesSchema);