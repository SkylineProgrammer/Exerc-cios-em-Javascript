const n = parseInt(prompt("Digite o valor de n para a sequência de Fibonacci:"));
let a = 0, b = 1;

console.log("Sequência de Fibonacci:");
for (let i = 1; i <= n; i++) {
  console.log(a);
  const temp = a + b;
  a = b;
  b = temp;
}
