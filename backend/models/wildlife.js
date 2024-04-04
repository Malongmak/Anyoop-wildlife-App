const mongoose = require('mongoose');

const wildlifeSchema = new mongoose.Schema({
    species: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: [Number]
    },
    image: String,
    // Add other fields as needed
});

module.exports = mongoose.model('Wildlife', wildlifeSchema);
