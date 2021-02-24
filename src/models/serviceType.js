const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceTypeSchema = new Schema(
  {
    title: { type: String, required: true },
    iconCode: Number,
   
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const ServiceType = mongoose.model("ServiceType", serviceTypeSchema);

module.exports = ServiceType;
