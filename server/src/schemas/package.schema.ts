import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  package_name: {
    type: String,
    required: true,
  },
  package_img: {
    type: String,
  },
  destination: {
    type: String,
    required: true,
  },

  package_desc: {
    type: String,
    required: true,
  },
  inclusion: {
    type: [String],
  },

  base_price: {
    type: Number,
    required: true,
  },
  discount_price: {
    type: Number,
    required: true,
  },
  final_price: {
    type: Number,
    required: true,
  },
  exclusions: {
    type: String,
  },
});

const packages = mongoose.model("packages", packageSchema);
export default packages;
