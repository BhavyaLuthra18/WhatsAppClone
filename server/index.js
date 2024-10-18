import express from "express";
import Connection from "./database/db.js";
import Route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(
  cors({
    origin: ["whats-app-clone-fv7y.vercel.app"],
    optionsSuccessStatus: 200,
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route);
Connection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is running successfully on  PORT ${PORT}`)
);
