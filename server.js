const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("<h1>HI developer 👇👇👇/h1>");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const User = require("./auth/routes/user");
const { errorHandler } = require("./middlewares/errorHandler");
// middleware
app.use(helmet());
app.use(morgan("dev"));
// app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "400mb",
    extended: true,
    parameterLimit: 5000000,
  })
);
app.use("/api", User);
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`A Node Js API is listening on port: ${port}`);
});
