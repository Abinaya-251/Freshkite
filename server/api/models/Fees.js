import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
var FeesSchema = new mongoose.Schema(
    {
      totalfees: {
        type: Number,
        require: true, 
      },
      year: {
        type: Number,
        require: true, 
      },
      mkv : [{
        _id : Number,
        year : Number,
        }],

      course: {
        type: String,
        require: true,
      }
    }
  )
  autoIncrement.initialize(mongoose.connection);
  FeesSchema.plugin(autoIncrement.plugin, {
    model: "Fees", 
    field: "_id", 
    startAt: 201, 
    incrementBy: 1, 
  });
  
  export default mongoose.model("Fees", FeesSchema);