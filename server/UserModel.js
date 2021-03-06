const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
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
const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
