let nomeAluno = prompt("Digite o nome do aluno:");

// Solicita ao usuário o turno (M para Matutino ou V para Vespertino)
let turno = prompt("Digite o turno do aluno (M para Matutino ou V para Vespertino):");

// Verifica o turno e exibe a mensagem
if (turno === "M" || turno === "m") {
    alert("Bom dia, " + nomeAluno + "!");
} else if (turno === "V" || turno === "v") {
    alert("Boa tarde, " + nomeAluno + "!");
} else {
    alert("Por favor, insira um turno válido (M para Matutino ou V para Vespertino).");
}
