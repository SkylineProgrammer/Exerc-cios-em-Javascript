let idade = parseInt(prompt("Digite a idade da pessoa:"));
let sexo = prompt("Digite o sexo da pessoa (M ou F):");

// Verifica se a idade é válida
if (isNaN(idade) || idade < 0) {
    alert("Por favor, insira uma idade válida.");
} else {
    // Verifica se o sexo é válido e determina a elegibilidade para aposentadoria
    if (sexo === "M" || sexo === "m") {
        if (idade >= 65) {
            alert("Esta pessoa pode se aposentar.");
        } else {
            alert("Esta pessoa não pode se aposentar ainda.");
        }
    } else if (sexo === "F" || sexo === "f") {
        if (idade >= 60) {
            alert("Esta pessoa pode se aposentar.");
        } else {
            alert("Esta pessoa não pode se aposentar ainda.");
        }
    } else {
        alert("Por favor, insira um sexo válido (M ou F).");
    }
}
