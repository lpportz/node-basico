console.log('hello world')
//criando um arquivo que não acesso externo
//const - server para criar um a variavel
const idade = 15
//idade = 17 //vai dar erro pois o cont não pode ser alterado
//const idade +19 vai dar ero ,pois con não pode ser recriado

// let- variavel lexical) serve para para criar uma variavel que nãp pode ser recriada
// mas pode alterada
let name = 'felipe'
name = "felipe" //não vai da erro pois le pode ser alteado
//let name = "joão" // vai da erro ,pois let não pode se alterado


//var - variavel (variavel default) serve para criar uma variavel sem controlenenhum
var lastname = "ibeiro" //pode se recriada sem controle algum
lastname - "olivera"  //não vai da erro , pois va pode ser alterado seu valor
var lastname = " de o oliveira"  //não vai da ero,pois var pode se recriada

module.exports.idade = idade
module.exports.lastname = lastname
module.exports.name = name
