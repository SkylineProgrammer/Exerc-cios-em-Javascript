const lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
const lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
const lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("É um triângulo equilátero.");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("É um triângulo isósceles.");
  } else {
    console.log("É um triângulo escaleno.");
  }
} else {
  console.log("Não é possível formar um triângulo com esses lados.");
}
