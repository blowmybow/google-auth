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

// app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

const userRoutes = require("./routes/userRoute");

app.use("/", userRoutes);

app.listen(5000, () => console.log("listening on: 5000"));
