const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/employees", require("./routes/api/employee"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
