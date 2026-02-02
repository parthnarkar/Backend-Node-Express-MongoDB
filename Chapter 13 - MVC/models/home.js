//fake database
const registeredHomes = [];

module.exports = class Home {
  constructor(houseName, housePrice, houseLoc, houseRating, houseImage) {
    this.houseName = houseName;
    this.housePrice = housePrice;
    this.houseLoc = houseLoc;
    this.houseRating = houseRating;
    this.houseImage = houseImage;
  }

  save() {
    registeredHomes.push(this);
  }

  static fetchAll() {
    return registeredHomes;
  }

}