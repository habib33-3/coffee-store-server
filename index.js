import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, (req, res) => {
  console.log(`server running ${port}`);
});
