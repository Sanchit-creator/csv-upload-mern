const File = require('../models/files')

module.exports.upload = async (req, res) => {
    try {
        const newFile = new File({
            file: req.file.path,
            name: req.file.filename
        });
        await newFile.save();
        res.status(200).json({
            message: "Uploaded Successfully",
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.fetch = async (req, res) => {
    try {
        const fetchData = await File.find();
        res.status(200).json(fetchData);
        console.log(fetchData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.getFile = async (req, res) => {
    const fs = require('fs');
    try {
        const file = await File.findOne({ _id: req.body.id });
        const fileData = fs.readFileSync(file.file, { encoding: 'utf8', flag: 'r' });
        res.status(200).json(fileData)
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}





