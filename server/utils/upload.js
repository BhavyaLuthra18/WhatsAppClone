import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  // url where you want to upload the files

  url: ` mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.yvacmlv.mongodb.net/?retryWrites=true&w=majority&appName=whatsapp-clone`,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  // what is coming from the behind for that we use request
  file: (request, file) => {
    // mimetype =  image extension
    const match = ["image/png", "image/jpg", "image/jpeg"];

    // mimeType if file is there it will return 0 ,1 otherwise -1
    if (match.indexOf(file.mimetype) === -1) {
      // for  the not having the duplication of files
      return `${Date.now()}-file-${file.originalname}`;
    }

    // if image is not there
    return {
      buckName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage: storage });
