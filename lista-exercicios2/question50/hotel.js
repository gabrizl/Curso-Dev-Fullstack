class Hotel {
    constructor(id, name, city, totalRooms) {
      this.id = id;
      this.name = name;
      this.city = city;
      this.totalRooms = totalRooms;
      this.availableRooms = totalRooms;
      this.ratings = [];
    }
  
    addRating(rating) {
      this.ratings.push(rating);
    }
  
    getAverageRating() {
      if (this.ratings.length === 0) return "No ratings yet.";
      const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
      return (sum / this.ratings.length).toFixed(2);
    }
  }
  
  module.exports = Hotel;
  