require("dotenv").config();

const express = require("express");
const app = express();
const session = require("express-session");

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

app.set("view engine", "ejs");

const userRoutes = require("./routes/userRoute");

app.use("/", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("listening to port `${port}`"));
