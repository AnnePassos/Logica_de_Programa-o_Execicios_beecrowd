/*1015
Leia os quatro valores correspondentes aos eixos x e y de dois pontos 
quaisquer no plano, p1(x1,y1) e p2(x2,y2) e 
calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:
Distancia = raiz quadrada de (x2-x1)² + (y2-y1)²
Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois 
valores de ponto flutuante: x1 y1 e 
a segunda linha contém dois valores de ponto flutuante x2 y2.
Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, considerando 
4 casas decimais.  */

let x1 = parseFloat (1.0);
let x2 = parseFloat (5.0);
let y1 = parseFloat (7.0);
let y2 = parseFloat (9.0);
// valor de x e y

let x=(x2-x1)*(x2-x1); // isso é igual a (x2-x1)²
let y=(y2-y1)*(y2-y1); // isso é igual a (y2-y1)²
// raiz de x e y

let distancia=Math.sqrt (x+y);  //raiz quadrada de X e Y
// saida com 4 casas decimais 

console.log (distancia.toFixed(4));