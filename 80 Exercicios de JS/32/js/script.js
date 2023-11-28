let nota = parseFloat(prompt("Digite a nota do aluno:"));
if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Por favor, insira uma nota válida entre 0 e 10.");
} else {
    // Determina a conceituação com base na nota
    let conceito;

    if (nota >= 9.0) {
        conceito = "Ótimo (A)";
    } else if (nota >= 8.0) {
        conceito = "Bom (A)";
    } else if (nota >= 6.0) {
        conceito = "Regular (C)";
    } else if (nota >= 0) {
        conceito = "Reprovado (E/F)";
    }

    // Exibe a conceituação
    alert("Conceituação: " + conceito);
}
