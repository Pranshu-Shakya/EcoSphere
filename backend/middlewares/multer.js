import multer from "multer";

// Set up storage engine
const storage = multer.diskStorage({
	filename: function (req, file, callback) {
		callback(null, file.originalname);
	},
});

// Initialize multer with the storage engine
const upload = multer({ storage });

export default upload;