import mongoose from "mongoose";

const documentSchema = mongoose.Schema(
  {
    user: { type: String },
    docType: { type: String},
    serialNumber: { type: String, unique: true },
    location: { type: String },
    status: { type: String, enum: ["lost", "found"] },
    photo: { type: String },
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);
export default Document;
