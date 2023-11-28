let contador = 1;
let somaIdades = 0;

while (contador <= 5) {
    let nome = prompt("Digite o nome da pessoa " + contador + ":");
    let idade = parseInt(prompt("Digite a idade da pessoa " + contador + ":"));

    if (!isNaN(idade) && idade > 0) {
        somaIdades += idade;
        contador++;
    } else {
        alert("Por favor, insira uma idade válida para a pessoa " + contador + ".");
    }
}

if (contador > 1) {
    let mediaIdades = somaIdades / (contador - 1);
    alert("A média das idades é: " + mediaIdades.toFixed(2));
} else {
    alert("Nenhuma idade válida foi inserida.");
}
