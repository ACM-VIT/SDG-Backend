const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the Business model
const BusinessSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    description: { 
        type: String, 
        required: true, 
    },
    contactEmail: { 
        type: String,
        required: true,
    },
    contactPhone: { 
        type: String,
        required: true,
    },
    address: { 
        type: String,
        required: true,
    },
    website: { 
        type: String, 
    },
    category: { 
        type: String,
        required: true 
    },
    products: { type: [String] }
});

// Create and export the Business model
const Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;
