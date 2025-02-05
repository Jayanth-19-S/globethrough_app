import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    dob: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);
export default user;
