let idade = parseInt(prompt("Digite a sua idade:"));

// Verifica a faixa etária
if (isNaN(idade) || idade < 0) {
    alert("Por favor, insira uma idade válida.");
} else if (idade < 13) {
    alert("Você é uma criança.");
} else if (idade < 18) {
    alert("Você é um adolescente.");
} else if (idade < 60) {
    alert("Você é um adulto.");
} else {
    alert("Você é um idoso.");
}
