
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    profession: {
        type: String,
        required: true,
        trim: true
    },
    background: {
        type: String,
        required: true,
        trim: true
    },
    traits: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
    