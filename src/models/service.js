const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    title: { type: String, required: true },
    imageService: { type: String },
    description: { type: String, required: true },
    type: { type: Schema.Types.ObjectId, ref: "ServiceType" },
    availableTime: { type: String },
    city: { type: String, required: true },
    address: { type: String, required: true },
    credits: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
