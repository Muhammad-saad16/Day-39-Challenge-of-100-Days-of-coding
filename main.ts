//            🚀 Day 39 Challenge: Start Coding! 🚀

// Question 115: 
// Use a switch statement to log the days of the week based on a number (1-7).

let day: number = 7;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a valid day");
        break;
}

console.log(day);// output is sunday



// Question 116: 
// Create a switch case that matches several cases to the same code block, representing seasons.

let season: string = "spring";

switch (season) {
    case "spring":
    case "summer":
    case "autumn":
        console.log("It's hot");
        break;
    case "winter":
        console.log("It's cold");
        break;
    default:
        console.log("Not a valid season");
        break;
}

console.log(season); //output is it's hot



// Question 117:
// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

let days: number = 7;

switch (days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a valid day");
        break;
}
console.log(days);// output is Sunday

