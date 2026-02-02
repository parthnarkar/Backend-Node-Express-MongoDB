// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home to airbnb', currentPage: 'Add Home' });
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  registeredHomes.push({ houseName: req.body.houseName, housePrice: req.body.housePrice, houseLoc: req.body.houseLoc, houseRating: req.body.houseRating, houseImage: req.body.houseImage });
  res.render('homeAdded', { pageTitle: 'Home Added Successfully', currentPage: 'Home Added' });
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;