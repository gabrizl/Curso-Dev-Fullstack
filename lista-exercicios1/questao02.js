// Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const prompt = require('prompt-sync')();

let numEleitores = parseInt(prompt("Digite o número de eleitores:"))
let numVotosBrancos = parseInt(prompt("Digite o número de votos em branco:"))
let numVotosNulos = parseInt(prompt("Digite o número de votos nulos:"))
let numVotosValidos = parseInt(prompt("Digite o número de votos validos:"))

let totalVotos= numVotosBrancos+numVotosNulos+numVotosValidos

if(totalVotos>numEleitores){
    console.log("Erro! Possui mais votos do que eleitores");
}else{
    console.log((numVotosBrancos/numEleitores)*100,"% (percentual de votos em branco)");
    console.log((numVotosNulos/numEleitores)*100,"% (percentual de votos nulos)");
    console.log((numVotosValidos/numEleitores)*100,"% (percentual de votos validos)");
}