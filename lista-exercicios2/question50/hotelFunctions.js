const prompt = require("prompt-sync")();
const Hotel = require("./hotel");
const Reservation = require("./reservation");

let hotels = [];
let reservations = [];
let reservationIdCounter = 1;

function addHotel() {
  const id = hotels.length + 1;
  const name = prompt("Enter hotel name: ");
  const city = prompt("Enter hotel city: ");
  const totalRooms = parseInt(prompt("Enter total rooms: "), 10);
  const newHotel = new Hotel(id, name, city, totalRooms);
  hotels.push(newHotel);
  console.log(`Hotel added: ${name} in ${city} with ${totalRooms} rooms.`);
}

function findHotelsByCity() {
  const city = prompt("Enter city to search for hotels: ");
  const foundHotels = hotels.filter(
    (hotel) => hotel.city.toLowerCase() === city.toLowerCase()
  );
  if (foundHotels.length > 0) {
    console.log(`Hotels available in ${city}:`);
    foundHotels.forEach((hotel) => {
      console.log(
        `ID: ${hotel.id}, Name: ${hotel.name}, Available Rooms: ${hotel.availableRooms}, Average Rating: ${hotel.getAverageRating()}`
      );
    });
  } else {
    console.log(`No hotels found in ${city}.`);
  }
}

function makeReservation() {
  const idHotel = parseInt(prompt("Enter hotel ID for reservation: "), 10);
  const nomeCliente = prompt("Enter your name: ");
  const hotel = hotels.find((h) => h.id === idHotel);
  if (hotel && hotel.availableRooms > 0) {
    const newReservation = new Reservation(
      reservationIdCounter++,
      idHotel,
      nomeCliente
    );
    reservations.push(newReservation);
    hotel.availableRooms--;
    console.log(
      `Reservation made for ${nomeCliente} at hotel ${hotel.name}. Reservation ID: ${newReservation.idReserva}`
    );
  } else {
    console.log(`Reservation failed. Hotel not found or no available rooms.`);
  }
}

function cancelReservation() {
  const idReserva = parseInt(prompt("Enter reservation ID to cancel: "), 10);
  const reservationIndex = reservations.findIndex(
    (r) => r.idReserva === idReserva
  );
  if (reservationIndex !== -1) {
    const reservation = reservations[reservationIndex];
    const hotel = hotels.find((h) => h.id === reservation.idHotel);
    if (hotel) {
      hotel.availableRooms++;
    }
    reservations.splice(reservationIndex, 1);
    console.log(`Reservation ID ${idReserva} cancelled.`);
  } else {
    console.log(`Reservation ID ${idReserva} not found.`);
  }
}

function listReservations() {
  if (reservations.length > 0) {
    console.log(`List of all reservations:`);
    reservations.forEach((reservation) => {
      const hotel = hotels.find((h) => h.id === reservation.idHotel);
      console.log(
        `Reservation ID: ${reservation.idReserva}, Hotel: ${hotel.name}, Client: ${reservation.nomeCliente}, Checked In: ${reservation.checkedIn}`
      );
    });
  } else {
    console.log(`No reservations found.`);
  }
}

function checkIn() {
  const idReserva = parseInt(prompt("Enter reservation ID to check in: "), 10);
  const reservation = reservations.find((r) => r.idReserva === idReserva);
  if (reservation && !reservation.checkedIn) {
    reservation.checkedIn = true;
    console.log(`Checked in successfully. Reservation ID: ${idReserva}`);
  } else if (reservation && reservation.checkedIn) {
    console.log(`Already checked in. Reservation ID: ${idReserva}`);
  } else {
    console.log(`Reservation ID ${idReserva} not found.`);
  }
}

function checkOut() {
  const idReserva = parseInt(prompt("Enter reservation ID to check out: "), 10);
  const reservationIndex = reservations.findIndex(
    (r) => r.idReserva === idReserva
  );
  if (reservationIndex !== -1) {
    const reservation = reservations[reservationIndex];
    const hotel = hotels.find((h) => h.id === reservation.idHotel);
    if (hotel) {
      hotel.availableRooms++;
      const rating = parseFloat(prompt("Rate your stay (1 to 5): "), 10);
      if (rating >= 1 && rating <= 5) {
        hotel.addRating(rating);
      } else {
        console.log("Invalid rating. Skipping rating.");
      }
    }
    reservations.splice(reservationIndex, 1);
    console.log(`Checked out successfully. Reservation ID: ${idReserva}`);
  } else {
    console.log(`Reservation ID ${idReserva} not found.`);
  }
}

function occupancyReport() {
  const idHotel = parseInt(prompt("Enter hotel ID for occupancy report: "), 10);
  const hotel = hotels.find((h) => h.id === idHotel);
  if (hotel) {
    const occupiedRooms = hotel.totalRooms - hotel.availableRooms;
    const occupancyRate = ((occupiedRooms / hotel.totalRooms) * 100).toFixed(2);
    console.log(
      `Hotel: ${hotel.name}, City: ${hotel.city}, Occupied Rooms: ${occupiedRooms}, Available Rooms: ${hotel.availableRooms}, Occupancy Rate: ${occupancyRate}%`
    );
  } else {
    console.log(`Hotel ID ${idHotel} not found.`);
  }
}

module.exports = {
  addHotel,
  findHotelsByCity,
  makeReservation,
  cancelReservation,
  listReservations,
  checkIn,
  checkOut,
  occupancyReport,
  hotels,
  reservations,
};
