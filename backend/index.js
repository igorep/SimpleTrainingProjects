import express from "express";

const app = express();
const port = 8080;

app.use(express.json());

app.post("/igor", (req, res) => {
  console.log(req.body); // Access the request body
  res.send("POST request received");
});

app.get("/igor", (req, res) => {
  res.send("Get request received");
});

app.listen(port, (req, res) => {
  console.log(`starting server on port: ${port}`);
});
