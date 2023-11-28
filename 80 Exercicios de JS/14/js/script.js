let anos = parseInt(prompt("Digite sua idade em anos:"));
let meses = parseInt(prompt("Digite sua idade em meses:"));
let dias = parseInt(prompt("Digite sua idade em dias:"));

if (isNaN(anos) || isNaN(meses) || isNaN(dias) || anos < 0 || meses < 0 || dias < 0) {
    alert("Por favor, insira valores válidos para a idade.");
} else {
    // Quantidade média de dias em um mês
    const diasPorMes = 30.44;

    // Quantidade de dias em um ano
    const diasPorAno = 365.25;

    // Calcula a quantidade total de dias de vida
    let totalDias = (anos * diasPorAno) + (meses * diasPorMes) + dias;

    alert("Você tem aproximadamente " + totalDias.toFixed(0) + " dias de vida.");
}
