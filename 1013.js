/* 1013
Faça um programa que leia três valores e apresente o maior dos três 
valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:
Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). 
Um segundo passo, portanto é necessário para chegar no resultado esperado.
Entrada
O arquivo de entrada contém três valores inteiros.
Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh 
o maior". */

let a = parseInt(7);
let b = parseInt(14);
let c = parseInt(106);

const maior = (a, b) => (a + b + Math.abs(a - b)) / 2;

let = [a, b, c] 

let resposta = maior(a, maior(b, c));

console.log(`${resposta} eh o maior`);