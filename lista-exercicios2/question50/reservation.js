class Reservation {
    constructor(idReserva, idHotel, nomeCliente) {
      this.idReserva = idReserva;
      this.idHotel = idHotel;
      this.nomeCliente = nomeCliente;
      this.checkedIn = false;
    }
  }
  
  module.exports = Reservation;
  