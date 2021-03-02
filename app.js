console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let rand = 79;

var userinput = window.prompt("Think of a number between 1 and 100!");
    
    if (userinput < rand) {
        console.log("Too low!");
    }

    if (userinput > rand) {
        console.log("Too high!");
    }

    if (userinput == rand) {
        console.log("Congratulations!");
    }

// Exercise 2
let anime = window.prompt("What's your favorite anime?");

switch (anime) {
    case "Naruto":
        console.log("Naruto premiered on October 3, 2002");
        break;
    case "Yu Yu Hakusho":
        console.log("You must like Ghost Detectives.");
        break;
    case "Inuyasha":
        console.log("You must REALLY like dogs...... 0_0");
        break;
    case "Sailor Moon":
        console.log("We all know you low key wish you could change like they do. I know I wish I could!");
        break;
    case "Speed Racer":
        console.log("I guess you have a life long rivalry with a brother that you thought was dead.");
        break;
    case "Full Metal Alchemist":
        console.log("You just can't leave stuff alone can you?");
        break;
    default:
        console.log("Could not recognize your information.");
        break;
}