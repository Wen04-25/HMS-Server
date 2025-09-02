const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    number: { type: String, required: true, unique: true },   // Room number
    type: { type: String, required: true },                   // Single, Double, Suite
    price: { type: Number, required: true },
    status: { type: String, enum: ["Available", "Occupied"], default: "Available" }
}, { timestamps: true });

module.exports = mongoose.model("Room", RoomSchema);
