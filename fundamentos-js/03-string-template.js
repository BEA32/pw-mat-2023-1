let nome = 'Valvicleide'
let idade = 20
let cidade = 'Franca/SP'

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.')

//Mesma mensagem usando string template
//String templates são strings especiais delimitadas
//pelos caracteres `` (acentos graves, "crases"), que
//permitem a interpolação direita de variaveis no meio delas
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)

//Dentro de uma string template, não estamos limitados a
//colocar apenas variaveis entre ${}. Podemos colocar
//qualquer código em JS valido ali
console.log(`DAQUI A 5 ANOS, ${nome.toUpperCase()} TERÁ ${idade + 5} ANOS.`)