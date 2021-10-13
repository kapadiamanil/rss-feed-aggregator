import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { handleError } from "./middleware/error";

(async () => {
  const db = require("./db");

  const router = require("./routes");

  const app = express();
  const apiPort = 3000;

  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  app.use(bodyParser.json());

  // Routes
  app.use("/api", router);

  app.use(express.static(path.join(__dirname, "..", "build")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

  app.use(handleError);

  app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
})();
