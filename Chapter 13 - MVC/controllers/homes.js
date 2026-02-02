const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home to airbnb', currentPage: 'Add Home' });
}

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  registeredHomes.push({ houseName: req.body.houseName, housePrice: req.body.housePrice, houseLoc: req.body.houseLoc, houseRating: req.body.houseRating, houseImage: req.body.houseImage });
  res.render('homeAdded', { pageTitle: 'Home Added Successfully', currentPage: 'Home Added' });
};

exports.getHomes = (req, res, next) => {
  console.log(registeredHomes);
  res.render('home', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home' });
}