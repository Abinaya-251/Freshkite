import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const StudentSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      require: true,
    },
    lname: {
      type: String,
      require: true,
    },
    course: {
      type: String,
      require: true,
    },
    year: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,

    },
    password: {
      type: String,
      require: true,
      unique: true,
    },
  },
    { timestamps: true }
);

autoIncrement.initialize(mongoose.connection);
StudentSchema.plugin(autoIncrement.plugin, {
  model: "Student", 
  field: "_id", 
  startAt: 101, 
  incrementBy: 1, 
});

  export default mongoose.model("Student", StudentSchema);