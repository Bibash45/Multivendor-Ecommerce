const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

// router
app.use("/api", require("./routes/authRoutes"));

app.get("/", (req, res) => res.send("Bibash's backend"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
