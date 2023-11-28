let nome = prompt("Digite o nome do aluno:");
let nota = parseFloat(prompt("Digite a nota do aluno:"));

if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Por favor, insira uma nota válida entre 0 e 10.");
} else {
    // Verifica a situação do aluno com base na nota
    if (nota >= 7) {
        alert(nome + " está aprovado na disciplina com a nota " + nota.toFixed(2) + ".");
    } else {
        alert(nome + " está em recuperação na disciplina com a nota " + nota.toFixed(2) + ".");
    }
}
