const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

// options : {useUnifiedTopology: true, useNewUrlParser : true},
const storage = new GridFsStorage({
    url : MONGO_URI,
    options: { useNewUrlParser: true },
    file : (req,file) => {
        const match = ['image/png','image/jpg'];

        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
            bucketName : "photos",
            filename : `${Date.now()}-file-${file.originalname}`
        }
    }
});

module.exports = multer({storage});