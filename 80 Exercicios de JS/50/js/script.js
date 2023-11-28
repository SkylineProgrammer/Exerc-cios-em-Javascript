let totalIdades = 0;
let contador = 0;

while (true) {
    let nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");
    
    if (nome.toLowerCase() === 'fim') {
        break;
    }
    
    let idade = parseInt(prompt("Digite a idade de " + nome + ":"));

    if (!isNaN(idade) && idade > 0) {
        totalIdades += idade;
        contador++;
    } else {
        alert("Por favor, insira uma idade válida.");
    }
}

if (contador > 0) {
    let mediaIdades = totalIdades / contador;
    alert("A média das idades das pessoas é: " + mediaIdades.toFixed(2));
} else {
    alert("Nenhuma idade válida foi inserida.");
}
