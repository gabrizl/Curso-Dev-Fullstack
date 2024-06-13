const prompt = require("prompt-sync")();
const {
  addHotel,
  findHotelsByCity,
  makeReservation,
  cancelReservation,
  listReservations,
  checkIn,
  checkOut,
  occupancyReport,
} = require("./hotelFunctions");

function mainMenu() {
  while (true) {
    console.log("\nHotel Reservation System");
    console.log("1. Add Hotel");
    console.log("2. Search Hotels by City");
    console.log("3. Make Reservation");
    console.log("4. Cancel Reservation");
    console.log("5. List Reservations");
    console.log("6. Check-In");
    console.log("7. Check-Out");
    console.log("8. Occupancy Report");
    console.log("9. Exit");
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
        checkIn();
        break;
      case 7:
        checkOut();
        break;
      case 8:
        occupancyReport();
        break;
      case 9:
        console.log("Exiting system.");
        return;
      default:
        console.log("Invalid choice, please try again.");
    }
  }
}

// Start the program
mainMenu();
