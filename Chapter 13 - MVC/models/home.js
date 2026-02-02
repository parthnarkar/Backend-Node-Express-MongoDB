const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { error } = require('console');

module.exports = class Home {
  constructor(houseName, housePrice, houseLoc, houseRating, houseImage) {
    this.houseName = houseName;
    this.housePrice = housePrice;
    this.houseLoc = houseLoc;
    this.houseRating = houseRating;
    this.houseImage = houseImage;
  }

  save() {
    Home.fetchAll(registeredHomes => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
        console.log(error);
      });
    })
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

}