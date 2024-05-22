// creating a guestlist array
var guestlist = ["Maheen", "Malaika", "Faryal"];
// making variable for those guest who cant come
var dontcome = guestlist[0];
// print the guest who cant come
console.log(dontcome, "Nai A skti");
// add or remove from guestlist array
guestlist.splice(0, 1, "Maheen");
//message print for biger table
console.log("GoodNews ! We have found a bigger table of dinner");
// adding new guest at starting inder of array
guestlist.unshift("Maira");
// adding a new guest at ending index of array
guestlist.push("Zunaira");
// Get a middle index of our array
var middleIndex = Math.floor(guestlist.length / 2);
// Adding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Eshaal");
// print message of update list
console.log("Updated List of our Guest");
// Sending a invitation messsage to our guests one by one with their name
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me?));")); });
