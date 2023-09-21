const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: false }
        timestamps: true,
    }
);

const Logs = mongoose.model("Logs", logsSchema);

module.exports = Logs;
