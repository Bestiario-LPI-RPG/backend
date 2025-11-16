const mongoose = require("mongoose");

const CreatureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    level: { type: Number, default: 1 },
    
    habitat: { type: String },
    
    imageUrl: { type: String },
    imageBase64: { type: String },

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Creature", CreatureSchema);