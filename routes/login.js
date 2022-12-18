var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  let error = {
    message: req.query.error || "Please login",
  };
  res.render("login", error);
});

router.post("/", (req, res, next) => {
  console.log(req.body);

  try {
    let { name, password } = req.body;

    if (name == "hendro" && password == "123") {
      res.redirect("/game");
      return;
    }
  } catch (e) {
    console.log(e.message);
  }
  res.redirect("/login?error=invalid%20Username");
});

router.get("/game", (req, res) => {
  res.send("game");
});

module.exports = router;
