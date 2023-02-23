// Desestruturação de vetor

let frutas = ['Laranja', 'banana', 'maça']

// A desestruturação cria variaveis avulsas e
// atribui os elementos do vetor, EM ORDEM, a
// cada uma delas
let [fruta1, fruta2, fruta3] = frutas

console.log({fruta1, fruta2, fruta3})

// Desestruturação parcial: 1ª e 2ª frutas
let [f1, f2] = frutas

console.log({f1, f2})

// Desestruturação parcial: 1ª e 3ª frutas
let [g1, g3] = frutas
console.log({g1, g3})

// Desestruturação parcial: 2ª e 3ª frutas
let [h2, h3] = frutas
console.log({h2, h3})

/******************************************************/

// Problema: troca de valores ente variaveis (swap)
// É necessario usar o ponto e virgula no final para funcionar
let x = 5, y = 10

console.log('Antes do swap:', {x, y});

//Swap
// let aux = x
// x = y
// y = aux

// Swap usando desestruturação
[x, y] = [y, x];

console.log('Depois do swap:', {x, y});

/*************************************************/

// Desestruturação de objetos
let pessoa = {
    nome: 'Orkutilson de Oliveira',
    sexo: 'M',
    dataNasc: '2010-04-09',
    email: 'orkutilson@gmail.com'
}

// Na desestruturação de objetos, as variaveis avulsas:
// 1) PRECISAM ter o MESMO NOME das propriedades do objeto
// 2) Podem ser especificadas em qualquer ordem
// 3) Pode ser feita a desestruturação parcial

let { sexo, nome, email } = pessoa

console.log({nome, sexo, email})
