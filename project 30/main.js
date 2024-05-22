// creating A array
var userNames = ["Maida", "Maheen", "Misbah", "Admin", "Mahrukh"];
// using foreach loop on arrAY
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again"));
    }
});
