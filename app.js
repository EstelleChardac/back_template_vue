import moment from "moment";
import express from "express";
import cors from "cors";

const port = 3000;
const app = express();

function logger(req, res, next) {
  console.log(`[${Date.now()}] ${req.method} ${req.url}`);
  next();
}
app.use(cors());

//middleware pour lire le body
app.use(express.json());

app.use(logger);

app.get("/moment", (req, res) => {
  let now = moment().format("LTS");
  res.json(now);
});

app.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
