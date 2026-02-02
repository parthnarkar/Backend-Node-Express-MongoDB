const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home to airbnb', currentPage: 'Add Home' });
}

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  const { houseName, housePrice, houseLoc, houseRating, houseImage } = req.body;

  const home = new Home(houseName, housePrice, houseLoc, houseRating, houseImage);

  home.save();

  res.render('homeAdded', { pageTitle: 'Home Added Successfully', currentPage: 'Home Added' });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('home', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'Home'
    })
  );
}