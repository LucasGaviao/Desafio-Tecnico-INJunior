const taxaEuro = 6.10;
const taxaDolar = 5.70;

let valorReais = parseFloat(prompt("Digite o valor em reais (R$):"));

let valorEuros = valorReais / taxaEuro;
let valorDolares = valorReais / taxaDolar;

console.log("CONVERSÃO MONETÁRIA");
console.log(`Valor em reais: R$${valorReais.toFixed(2)}`);
console.log(`Valor em euros: €${valorEuros.toFixed(2)}`);
console.log(`Valor em dolar: US$${valorDolares.toFixed(2)}`);

