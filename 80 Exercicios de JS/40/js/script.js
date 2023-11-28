let numero = parseInt(prompt("Digite um número inteiro para a tabuada:"));

if (!isNaN(numero)) {
    let i = 1;

    while (i <= 10) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
        i++;
    }
} else {
    alert("Por favor, insira um número inteiro válido.");
}
