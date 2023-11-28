let idade = parseInt(prompt("Digite a idade da pessoa:"));

if (isNaN(idade) || idade < 0) {
    alert("Por favor, insira uma idade válida.");
} else {
    // Verifica se a pessoa pode votar com base na idade
    if ((idade >= 18 && idade <= 70) || (idade >= 16 && idade < 18) || idade > 70) {
        alert("A pessoa pode votar.");
    } else {
        alert("A pessoa não pode votar.");
    }
}
