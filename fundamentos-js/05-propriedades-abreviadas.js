//Alguns dados de um usuario
let fullname = 'Joniscleison Junqueira Junior'
let username = 'junin'
let group = 'alunos'

/*
    Criando um objeto a partir das variaveis acima.
    Note que o nome das propriedades (à esquerda)
    coincide com o nome das variáveis (à direita).
*/
/*let user = {
    fullname: fullname,
    username: username,
    group: group
}*/

//Criando um objeto equivalente ao do código acima,
//usando propriedades abreviadas.
//Não é necessario repetir o mesmo identificados
// antes e depois do simbolo
let user = {
    fullname,
    username,
    group
}
console.log(user)

//Um objeto pode misturar propriedades abreviadas e
//propriedades não abreviadas
let user2 = {
    fullname,
    username,
    password: 'abc123',    //Propriedade não abreviada 
    group,
    last_login: '2023-02-16 08:21:43'  //Propriedade não abreviada
}

console.log(user2)

/* Depuração usando propriedades abreviadas */

//Exibindo o valor de duas variáveis. Veja que os valores
//são exibidos, mas a saida não informa de quais variaveis
//povêm os valores.
let x = 10, y = 'batata'
console.log(x,y)

//Saida melhorada: passando um objeto com propriedades
//abreviadas para console.log(), como uma forma de sabermos
//de quais variaveis porem os valores.
console.log({x,y})