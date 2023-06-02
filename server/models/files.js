const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    file: {
        type: String,
    },
    name: {
        type: String,
    }
})

const File = mongoose.model('File', fileSchema);
module.exports = File;