const prompt = require("prompt-sync")();

class Hotel {
  constructor(id, name, city, totalRooms) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.totalRooms = totalRooms;
    this.availableRooms = totalRooms;
  }
}

class Reservation {
  constructor(idReserva, idHotel, nomeCliente) {
    this.idReserva = idReserva;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
  }
}

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
        `ID: ${hotel.id}, Name: ${hotel.name}, Available Rooms: ${hotel.availableRooms}`
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
        `Reservation ID: ${reservation.idReserva}, Hotel: ${hotel.name}, Client: ${reservation.nomeCliente}`
      );
    });
  } else {
    console.log(`No reservations found.`);
  }
}

function mainMenu() {
  while (true) {
    console.log("\nHotel Reservation System");
    console.log("1. Add Hotel");
    console.log("2. Search Hotels by City");
    console.log("3. Make Reservation");
    console.log("4. Cancel Reservation");
    console.log("5. List Reservations");
    console.log("6. Exit");
    const choice = parseInt(prompt("Enter your choice: "), 10);

    switch (choice) {
      case 1:
        addHotel();
        break;
      case 2:
        findHotelsByCity();
        break;
      case 3:
        makeReservation();
        break;
      case 4:
        cancelReservation();
        break;
      case 5:
        listReservations();
        break;
      case 6:
        console.log("Exiting system.");
        return;
      default:
        console.log("Invalid choice, please try again.");
    }
  }
}

mainMenu();
