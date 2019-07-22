const Multer = require('multer');

const {
    Storage
} = require('@google-cloud/storage');
const storage = new Storage({
    projectId: process.env.PROJECT_ID,
});
const bucket = storage.bucket(process.env.CLOUD_BUCKET);

// Returns the public, anonymously accessable URL to a given Cloud Storage
// object.
// The object's ACL has to be set to public read.
// [START public_url]
function getPublicUrl(filename) {
    return `https://storage.googleapis.com/${process.env.CLOUD_BUCKET}/${filename}`;
}

// Express middleware that will automatically pass uploads to Cloud Storage.
// req.file is processed and will have two new properties:
function sendUploadToGCS(req, res, next) {
    if (!req.file) {
        return next();
    }

    const gcsname = Date.now() + req.file.originalname;
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        },
        resumable: false
    });

    stream.on('error', (err) => {
        req.file.cloudStorageError = err;
        next(err);
    });

    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsname;
        file.makePublic().then(() => {
            req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
            next();
        });
    });

    stream.end(req.file.buffer);
};

// Multer handles parsing multipart/form-data requests.
// This instance is configured to store images in memory.
// This makes it straightforward to upload to Cloud Storage.
const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 20 * 1024 * 1024 // no larger than 20mb
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|tiff|bmp|jpeg|png)$/i)) {
            cb(new Error('Please upload an image with the format jpg, jpeg, tiff, bmp, or png'))
        }
        // 200 ok
        cb(undefined, true)
    }
})
module.exports = {
    getPublicUrl,
    multer,
    sendUploadToGCS
};