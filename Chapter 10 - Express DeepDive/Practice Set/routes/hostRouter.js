const express = require('express');
const rootDir = require('../utils/pathUtil');
const path = require('path');

const hostRouter = express.Router();

hostRouter.post("/contact-us", (req, res, end) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "contactSuccess.html"));
});

module.exports = hostRouter;