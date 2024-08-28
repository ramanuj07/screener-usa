import express from "express";
const app = express();

app.get("/", (req, res) => {
  return res.send("backend is cool");
});

app.listen(8000, () => {
  console.log("backend is working fine");
});
