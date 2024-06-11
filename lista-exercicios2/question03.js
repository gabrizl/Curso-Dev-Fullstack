const prompt = require('prompt-sync')();

let distance = parseInt(prompt("Type the distance you want to travel: "))
let price

if (distance > 0 && distance < 201 ){
    price = distance * 0.5
    console.log(`You need to pay R$${price} to travel ${distance}km`);

} else if (distance > 200){
    price = distance *0.45
    console.log(`You need to pay R$${price} to travel ${distance}km`);
}  else{
    console.log("invalid number");
}

