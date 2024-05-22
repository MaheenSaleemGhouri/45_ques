// creating a guestlist array
let guestlist = ["Maheen", "Malaika", "Faryal"];

// making variable for those guest who cant come
 let dontcome = guestlist[0];

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
 let middleIndex: number = Math.floor(guestlist.length / 2);

 // Adding a new guest to middle index of array
 guestlist.splice(middleIndex, 0, "Eshaal");


// print message of update list
 console.log("Updated List of our Guest");

// Sending a invitation messsage to our guests one by one with their name
 guestlist.forEach (oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?));

 
 // Inform that only two guest can be invited for dinner
 Console.log(""Unfortunately, the new dinner table wont arrive on time, So i can oly invite two guestsnto dinner with me");

 // using while-loop to remove guest from until only two names remain
 while(guestlist.lenght > 2) {
    let removedGuest = guestlist.pop();
  console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

//sending the invitation to the last two guest on the list
console.log("invitations to the last 2 Guest");

guestlist.foreach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`);

// removing last two guest from the list 
guestlist.pop();
guestlist.pop();

console.log("Empty list:", guestlist);
 