const express = require('express');
const rootDir = require('../utils/pathUtil');
const path = require('path');

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "homePage.html"));
});

userRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contactForm.html"));
});

module.exports = userRouter;