// 01. Função para ordenar array de 2 números em ordem crescente
function ordenarArrayDeDoisNumeros(array) {
    return array[0] > array[1] ? [array[1], array[0]] : array;
}

// 02. Função para ordenar array de 3 números em ordem crescente
function ordenarArrayDeTresNumeros(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// 03. Script para inverter elementos de um array de 3 números
let numeros = [];
for (let i = 0; i < 3; i++) {
    numeros.push(parseInt(prompt("Digite um número:")));
}
console.log("Array original:", numeros);
numeros.reverse();
console.log("Array invertido:", numeros);

// 04. Função para mostrar todos os índices onde um número aparece no vetor
function encontrarIndices(vetor, numero) {
    const indices = [];
    vetor.forEach((elemento, indice) => {
        if (elemento === numero) {
            indices.push(indice);
        }
    });
    return indices;
}

// 05. Script para gerar números de Fibonacci
const n = parseInt(prompt("Digite um inteiro positivo:"));
const fibonacci = [0, 1];
for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log("Fibonacci:", fibonacci.join(", "));

// 06. Script para gerar fatorial
const m = parseInt(prompt("Digite um inteiro positivo para calcular o fatorial:"));
let fatorial = "Fatorial de " + m + ": ";
let resultado = 1;
for (let i = 1; i <= m; i++) {
    resultado *= i;
    fatorial += i + (i === m ? " = " : " x ");
}
fatorial += resultado;
console.log(fatorial);

// 07. Declaração e inicialização de matriz
const linhas = parseInt(prompt("Digite o número de linhas:"));
const colunas = parseInt(prompt("Digite o número de colunas:"));
const matriz = [];
let count = 1;
for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
        linha.push(count++);
    }
    matriz.push(linha);
}
console.log("Matriz:", matriz);

// 08. Função para converter número decimal em hexadecimal
function decimalParaHexadecimal(decimal) {
    return decimal.toString(16);
}

// 09. Programa para empilhar números pares e desempilhar números ímpares
const pilha = [];
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt("Digite um número:"));
    if (numero % 2 === 0) {
        pilha.push(numero);
    } else if (pilha.length > 0) {
        pilha.pop();
    } else {
        console.log("Pilha vazia.");
    }
}
while (pilha.length > 0) {
    console.log("Elemento desempilhado:", pilha.pop());
}

// 10. Programa para empilhar números pares e ímpares, e desempilhar zero
const pilhaPar = [];
const pilhaImpar = [];
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt("Digite um número:"));
    if (numero === 0) {
        if (pilhaPar.length > 0 && pilhaImpar.length > 0) {
            console.log("Elemento desempilhado da pilha par:", pilhaPar.pop());
            console.log("Elemento desempilhado da pilha ímpar:", pilhaImpar.pop());
        } else {
            console.log("Erro: Alguma pilha está vazia.");
        }
    } else if (numero % 2 === 0) {
        pilhaPar.push(numero);
    } else {
        pilhaImpar.push(numero);
    }
}
while (pilhaPar.length > 0) {
    console.log("Elemento desempilhado da pilha par:", pilhaPar.pop());
}
while (pilhaImpar.length > 0) {
    console.log("Elemento desempilhado da pilha ímpar:", pilhaImpar.pop());
}
