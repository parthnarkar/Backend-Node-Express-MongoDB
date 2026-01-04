const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  res.send(`
    <h1> Register your Home Here </h1>
    <form action="/host/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter House Name" />
      <input type="submit" />
    </form>
    `);
});

hostRouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1> Home Registered Successfully </h1>
    <a href="/">Go to Home Page</a>
    `);
});

module.exports = hostRouter;