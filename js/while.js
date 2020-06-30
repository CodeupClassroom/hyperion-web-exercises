let num=1;

while (num < 65536) {
    num *= 2;
    console.log(num);
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// var allCones = 100;
do {
    //sell cones
    // This expression will generate a random number between 1 and 5
    let cones = Math.floor(Math.random() * 5) + 1;
    if (cones <= allCones) {
        allCones = allCones - cones;
        console.log(cones + " cones sold...") // if there are enough cones
    } else {
        console.log("Cannot sell you " + cones + " cones I only have " + allCones + "...");
    }

} while (allCones > 0);

console.log("Yay! I sold them all!"); // If there are no more cones