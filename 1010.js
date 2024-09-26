/* 1010
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, 
o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 
e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, 
respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de 
deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser 
apresentado com 2 casas após o ponto. */

let numPeca_1 = parseInt(12);
let qtdPeca_1 = parseInt(1);
let precoPeca_1 = parseFloat(5.30);

let numPeca_2 = parseInt(16);
let qtdPeca_2 = parseInt(2);
let precoPeca_2 = parseFloat(5.10);

let valor = (qtdPeca_1 * precoPeca_1) + (qtdPeca_2 * precoPeca_2);

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);