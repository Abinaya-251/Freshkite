import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

var AdminSchema = new mongoose.Schema(
    {
      fname: {
          type: String,
          require: true,
      },
      lname: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      },
      phone: {
        type: String,
        require: true,
      },
      isAdmin: {
        type: Boolean,
        default: true,
      },
    }
  )
autoIncrement.initialize(mongoose.connection);
AdminSchema.plugin(autoIncrement.plugin, {
  model: "Admin", 
  field: "_id", 
  startAt: 3001, 
  incrementBy: 1, 
});
  export default mongoose.model("Admin", AdminSchema);