const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/index.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/home.html"));
});
app.get("/coxinha", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/coxinha.html"));
});

app.use(express.static(path.resolve(__dirname, "../public/")));

app.listen(5569, () => {
  console.log("Servidor LEVANTADO");
});
