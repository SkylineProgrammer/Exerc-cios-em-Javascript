// Solicita ao usuário o nome do mês
let nomeMes = prompt("Digite o nome de um mês:");

// Converte o nome do mês para letras minúsculas para tornar a comparação sem distinção entre maiúsculas e minúsculas
nomeMes = nomeMes.toLowerCase();

// Define um objeto com os meses e suas respectivas quantidades de dias
let meses = {
    "janeiro": 31,
    "fevereiro": 28,
    "março": 31,
    "abril": 30,
    "maio": 31,
    "junho": 30,
    "julho": 31,
    "agosto": 31,
    "setembro": 30,
    "outubro": 31,
    "novembro": 30,
    "dezembro": 31
};

// Verifica se o nome do mês é válido e exibe a quantidade de dias
if (meses[nomeMes]) {
    alert("O mês de " + nomeMes + " possui " + meses[nomeMes] + " dias.");
} else {
    alert("Mês inválido. Certifique-se de escrever o nome do mês corretamente.");
}
