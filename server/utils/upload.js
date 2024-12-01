import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Configure GridFS Storage
const storage = new GridFsStorage({
  url: `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.yvacmlv.mongodb.net/whatsapp-clone?retryWrites=true&w=majority&appName=whatsapp-clone`,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      // Skip unsupported file types
      return null;
    }

    return {
      bucketName: "photos", // Correct spelling
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
