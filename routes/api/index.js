const router = require("express").Router();
const userRoutes = require("./users");
const powerPointRoutes = require("./powerPoints")
const db = require("../../models");
const passport = require("../../config/passport-setup");

// user and powerPoint routes
router.use("/users", userRoutes);
router.use("/powerPoints", powerPointRoutes);

// Route to log a user in
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("Back in the redirect!");
  console.log("Req.user is ", req.user);
  console.log(req.session);
  res.status(200).send(`${req.user.id} has been authenticated!`);   
});

// route to sign up a user
router.post("/signup", function (req, res) {
  console.log('req.body= ' + req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    permissions: req.body.permissions,
    lastLogIn: Date.now()
  }).then(function () {
    res.redirect(307, "/api/login");
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });
});

// Route for logging user out
router.get("/logout", function (req, res) {
      req.logout();
      res.redirect("/");
  console.log("user logged out");
});

module.exports = router;