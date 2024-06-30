import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:8022";

let gfs, gridFSBucket;
// mongoose connenction
const conn = mongoose.connection;

// once connection is one
conn.once("open", () => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  // db name , mongoose mongo server
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadFile = async (req, res) => {
  // if file doesnt come from front end
  if (!req.file) {
    return res.status(404).json("File not found");
  }

  // file is there then give image URL as file is save in db
  const imageUrl = `${url}/file/${req.file.filename}`;
  res.status(200).json(imageUrl);
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFSBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
