const { Schema, model } = require('mongoose');

const timestampsSchema = new Schema({
    time: { type: String, required: true }
});

const Timestamp = model('timestamp', timestampsSchema);

module.exports = Timestamp;