var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me?));\n\n \n // Inform that only two guest can be invited for dinner\n Console.log(\"\"Unfortunately, the new dinner table wont arrive on time, So i can oly invite two guestsnto dinner with me\");\n\n // using while-loop to remove guest from until only two names remain\n while(guestlist.lenght > 2) {\n    let removedGuest = guestlist.pop();\n  console.log("), Sorry, $, { removedGuest: removedGuest }, I, cant, invite, you, to, dinner(__makeTemplateObject([");\n}\n\n//sending the invitation to the last two guest on the list\nconsole.log(\"invitations to the last 2 Guest\");\n\nguestlist.foreach(lasttwo => console.log("], [");\n}\n\n//sending the invitation to the last two guest on the list\nconsole.log(\"invitations to the last 2 Guest\");\n\nguestlist.foreach(lasttwo => console.log("])), luckly, $, { lasttwo: lasttwo }, you, are, still, invited, to, dinner(__makeTemplateObject([");\n\n// removing last two guest from the list \nguestlist.pop();\nguestlist.pop();\n\nconsole.log(\"Empty list:\", guestlist);\n "], [");\n\n// removing last two guest from the list \nguestlist.pop();\nguestlist.pop();\n\nconsole.log(\"Empty list:\", guestlist);\n "]))); });
