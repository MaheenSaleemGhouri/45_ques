var guestlist = ["Maheen", "Malaika", "Faryal"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi ah sakti");
guestlist.splice(0, 0, "MAhira");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
