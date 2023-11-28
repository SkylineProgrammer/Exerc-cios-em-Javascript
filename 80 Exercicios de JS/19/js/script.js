let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0) {
    alert("Por favor, insira notas válidas.");
} else {
    // Calcula a média das notas
    let media = (nota1 + nota2 + nota3) / 3;

    // Verifica se o aluno foi aprovado ou reprovado
    if (media >= 7) {
        alert("O aluno foi aprovado com média " + media.toFixed(2) + ".");
    } else {
        alert("O aluno foi reprovado com média " + media.toFixed(2) + ".");
    }
}
