const prompt = require("prompt-sync")();

let cigars_per_day = parseInt(prompt("Insert the number os cigars smoked: "));
let time_smoking = parseFloat(prompt("Insert the number of years smoking: "));

let year = 365;

if(cigars_per_day && time_smoking > 0 ){
    let result = (cigars_per_day * 10 * time_smoking * year) / 1440;

    console.log(`You lost ${result.toFixed(2)} days by cigars`);
}else{
    console.log("Insert a positive number!");
}

