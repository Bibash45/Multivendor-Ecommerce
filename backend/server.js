const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {dbConnect} = require("./utils/db")

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
console.log(process.env.PORT)
// router
app.use("/api", require("./routes/authRoutes"));

app.get("/", (req, res) => res.send("Bibash's backend"));


const port = process.env.PORT;
dbConnect()
app.listen(port, () => {
  console.log(`1. Server is running on port: ${port}`);
});
