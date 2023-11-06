/**
 * @param {number} n
 */
const SeatManager = function (n) {
  this.seats = new Array(n).fill(false);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  // Note: Time limit execeeded issue
  for (let i = 0; i < this.seats.length; i++) {
    if (this.seats[i] === false) {
      this.seats[i] = true;
      return i + 1;
    }
  }
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  this.seats[seatNumber - 1] = false;
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
