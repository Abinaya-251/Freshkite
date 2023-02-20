import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

var PayFeeSchema = new mongoose.Schema(
    {
      studentId: {
          type: Number,
          require: true,
      },
      feeId: {
        type: Number,
        require: true,
      },
      TotalFees: {
        type: Number,
        require: true,
      },
      AmountToPay: {
        type: Number,
        require: true
      },
      Balance: {
        type: Number,
        require: true,
      },
    }
  )
// autoIncrement.initialize(mongoose.connection);
// PayFeeSchema.plugin(autoIncrement.plugin, {
//   model: "payingFee", 
//   field: "_id", 
//   startAt: 1001, 
//   incrementBy: 1, 
// });
  export default mongoose.model("payingFee", PayFeeSchema);