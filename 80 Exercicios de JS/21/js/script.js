let quantidadePessoas = parseInt(prompt("Quantas pessoas deseja avaliar?"));
let menoresIdade = 0;
let maioresIdade = 0;

if (isNaN(quantidadePessoas) || quantidadePessoas <= 0) {
    alert("Por favor, insira uma quantidade válida.");
} else {
    // Solicita a idade de cada pessoa e faz a contagem
    for (let i = 0; i < quantidadePessoas; i++) {
        let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));

        if (!isNaN(idade)) {
            if (idade < 18) {
                menoresIdade++;
            } else {
                maioresIdade++;
            }
        } else {
            alert("Por favor, insira uma idade válida.");
            i--; // Reduz o contador para repetir a entrada da idade
        }
    }

    // Exibe o resultado
    alert("Há " + menoresIdade + " pessoa(s) menor(es) de idade e " + maioresIdade + " pessoa(s) maior(es) de idade.");
}
