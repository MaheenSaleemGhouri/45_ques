
// Making a array of countries and print its countries its original order
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];

console.log("Original Order:", countriesToVisit);

// print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// print the array in revered order without modifying the actual array list
console.log("Reverse Order", [...countriesToVisit].reverse());

// show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// we have changed the original array order now
console.log("Original Array Revered:", countriesToVisit.reverse());

// print the array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

//print te array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetic Order:", countriesToVisit.sort());

// we have changed again  the original array order now in reverse order again
console.log("Original Array Revered again:", countriesToVisit.reverse());
