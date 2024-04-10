const session = require("express-session");

const loadAuth = (req, res) => {
  res.render("auth");
};

const successGoogleLogin = (req, res) => {
  if (!req.user) res.redirect("/failure");
  console.log(req.user);
  res.send("Welcome " + req.user.email);
};

const failureGoogleLogin = (req, res) => {
  res.send("Error");
};

const logout = (req, res) => {
  req.logout(req.user, (err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};

module.exports = {
  loadAuth,
  successGoogleLogin,
  failureGoogleLogin,
  logout,
};
