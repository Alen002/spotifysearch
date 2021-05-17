const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static("./public/")); //server is serving all the files inside the public folder

app.listen(5000, () => {
  console.log("Server is up and running on 5000");
});

app.get("/test", (req, res) => {
  res.send("Testing the server");
});
