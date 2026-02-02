const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', { pageTitle: 'Add Home to airbnb', currentPage: 'Add Home' });
}

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('host/host-home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Host Home List',
      currentPage: 'host-homes'
    })
  );
}

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  const { houseName, housePrice, houseLoc, houseRating, houseImage } = req.body;

  const home = new Home(houseName, housePrice, houseLoc, houseRating, houseImage);

  home.save();

  res.render('host/homeAdded', { pageTitle: 'Home Added Successfully', currentPage: 'Home Added' });
};