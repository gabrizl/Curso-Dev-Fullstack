// Data storage
let hotels = [];
let reservations = [];
let reservationIdCounter = 1;

// Hotel constructor
function Hotel(id, name, city, totalRooms) {
  this.id = id;
  this.name = name;
  this.city = city;
  this.totalRooms = totalRooms;
  this.availableRooms = totalRooms;
}

// Reservation constructor
function Reservation(reservationId, hotelId, clientName) {
  this.reservationId = reservationId;
  this.hotelId = hotelId;
  this.clientName = clientName;
}

// Add a new hotel
function addHotel(name, city, totalRooms) {
  const id = hotels.length + 1;
  const newHotel = new Hotel(id, name, city, totalRooms);
  hotels.push(newHotel);
  console.log(`Hotel added: ${name} in ${city} with ${totalRooms} rooms.`);
}

// Search for hotels by city
function searchHotelsByCity(city) {
  const foundHotels = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());
  if (foundHotels.length === 0) {
    console.log(`No hotels found in ${city}.`);
  } else {
    console.log(`Hotels available in ${city}:`);
    foundHotels.forEach(hotel => {
      console.log(`- ${hotel.name} (ID: ${hotel.id}, Available rooms: ${hotel.availableRooms})`);
    });
  }
}

// Make a reservation
function makeReservation(hotelId, clientName) {
  const hotel = hotels.find(h => h.id === hotelId);
  if (!hotel) {
    console.log(`Hotel with ID ${hotelId} not found.`);
    return;
  }
  if (hotel.availableRooms > 0) {
    const newReservation = new Reservation(reservationIdCounter++, hotelId, clientName);
    reservations.push(newReservation);
    hotel.availableRooms--;
    console.log(`Reservation made for ${clientName} at ${hotel.name}. Reservation ID: ${newReservation.reservationId}`);
  } else {
    console.log(`No available rooms at ${hotel.name}.`);
  }
}

// Cancel a reservation
function cancelReservation(reservationId) {
  const reservationIndex = reservations.findIndex(r => r.reservationId === reservationId);
  if (reservationIndex === -1) {
    console.log(`Reservation with ID ${reservationId} not found.`);
    return;
  }
  const reservation = reservations[reservationIndex];
  const hotel = hotels.find(h => h.id === reservation.hotelId);
  if (hotel) {
    hotel.availableRooms++;
  }
  reservations.splice(reservationIndex, 1);
  console.log(`Reservation ID ${reservationId} canceled.`);
}

// List all reservations
function listReservations() {
  if (reservations.length === 0) {
    console.log("No reservations found.");
    return;
  }
  console.log("All reservations:");
  reservations.forEach(reservation => {
    const hotel = hotels.find(h => h.id === reservation.hotelId);
    console.log(`- Reservation ID: ${reservation.reservationId}, Client: ${reservation.clientName}, Hotel: ${hotel.name}, City: ${hotel.city}`);
  });
}

// Example usage
addHotel("Hotel Sunshine", "New York", 10);
addHotel("Hotel Moonlight", "Los Angeles", 5);
addHotel("Hotel Starlight", "New York", 8);

searchHotelsByCity("New York");

makeReservation(1, "John Doe");
makeReservation(1, "Jane Smith");
makeReservation(2, "Alice Johnson");

listReservations();

cancelReservation(1);

listReservations();
