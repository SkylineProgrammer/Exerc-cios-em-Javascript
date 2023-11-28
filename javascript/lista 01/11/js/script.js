const baseMaior = prompt("Digite a base maior do trapézio:");
const baseMenor = prompt("Digite a base menor do trapézio:");
const altura = prompt("Digite a altura do trapézio:");
const area = ((parseInt(baseMaior) + parseInt(baseMenor)) * parseInt(altura)) / 2;
alert("A área do trapézio é: " + area);