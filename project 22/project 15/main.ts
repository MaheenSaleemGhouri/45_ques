let guestlist = ["Maheen", "Malaika", "Faryal"];

let dontcome = guestlist[0];

console.log(dontcome, "nahi ah sakti");

guestlist.splice(0, 0, "MAhira");

guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));