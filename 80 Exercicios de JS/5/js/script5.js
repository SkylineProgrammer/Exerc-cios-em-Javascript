var preço
var quantidade
var total
preço =parseInt(prompt("Digite o preço:"))
quantidade =parseInt(prompt("Digite a quantidade :"))
if (quantidade>10){
total = (preço*0.9)*quantidade
}
else{
total =(preço*quantidade)
}
alert(""+total)