let numeroFaltas = parseInt(prompt("Digite o número de faltas do aluno:"));

if (isNaN(numeroFaltas) || numeroFaltas < 0) {
    alert("Por favor, insira um número válido de faltas.");
} else {
    // Verifica a situação do aluno com base no número de faltas
    if (numeroFaltas > 15) {
        alert("O aluno está reprovado por falta.");
    } else {
        alert("O aluno está aprovado na disciplina.");
    }
}
