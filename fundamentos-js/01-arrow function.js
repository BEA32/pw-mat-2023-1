/*
    Função tradicional com 1 parâmetro e 1 linha de corpo
    contendo return
*/
function quadrado(n) {
    return n * n
}

console.log('Função tradicional: ',quadrado(7))

// Função equivalente no formato arrow function
const quadradoA = n => n * n

console.log('Arrow function: ',quadradoA(7))

/*
    Função tradicional com mais de 1 parâmetro
    e uma única linha de corpo contendo return
*/
function soma(a, b, c){
    return a + b + c
}

console.log('Soma tradicional:', soma(10, 15, 20))

// Arrow function equivalente
// Quando há mais de 1 parametro, são necessarios parenteses em volta deles

const somaA = (a, b, c) => a + b + c

console.log('Soma arrow:', somaA(10, 15, 20))

/*
    Função tradicional sem parâmetro e com uma unica linha de return
*/
function aleatorio0a9() {
    //Retorna um numero aleatorio entre 0 e 9
    //Math.randow(): gera um numero aleatorio fracionario entre 0 e 1
    //Math.floor(): retira as casas decimais de um numero fracionario
    return Math.floor(Math.random() * 10)
}

console.log('Aleatorio tradicional:', aleatorio0a9())

//Arrow function equivalente
// Os parametros devem estar presentes, mesmo que não haja parametro
const aleatorio0a9A = () => Math.floor(Math.random() * 10)

console.log('Aleatorio arrow:', aleatorio0a9A())

/*
    Função tradicional com  um parametro e mais de uma linha no corpo
*/
function fatorial(n) {
    let resultado = 1
    for(let i = n; i > 1; i--) resultado *= 1
    return resultado
}

console.log('Fatorial tradicional:', fatorial(6))

//Arrow function equivalente
//Não há economia de linhas/código em relação ao corpo da função
const fatorialA = n => {
    let resultado = 1
    for(let i = n; i > 1; i--) resultado *= i
    return resultado
}

console.log('Fatorial arrow:', fatorialA(6))