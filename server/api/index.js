const express = require('express');
const fileUpload = require('../controllers/files')
const router = express.Router();
const upload = require('../middleware/upload')

router.post('/upload-file', upload.single('file'), fileUpload.upload)
router.get('/get-file', fileUpload.fetch)
router.get('/file-detail', fileUpload.getFile)

module.exports = router;