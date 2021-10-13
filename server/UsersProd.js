const mongoose = require("mongoose");
const UserProdSchema = mongoose.Schema(
  {
    email: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isRemote: Boolean,
    filters: Array,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const UsersProd = mongoose.model("UsersProd", UserProdSchema);

module.exports = UsersProd;
