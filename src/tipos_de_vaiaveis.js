console.log('tipo de variaveis')
console.log('strings')
// os tipos de texos - strings
//tres forma s de declara u tipo de texto
//
//aspas simples
const string1 = 'exemplo aspa simples'
//aspas duplas
const string2 = ' exemplo aspa dupla'
//crase
const string3 = ` exemplo de crase`

console.log(string1)
console.log(string2)
console.log(string3)

// a unica diferença enre a crase, pois ela permie iserir variaveis dento do texto
// onde o valor da variavel vai ser utilizado como texto naquele ponto de inserção
//através do ${}, aonde a variavel dese ser inserida dento das chaves.
//
//outa coisa que podem utilizar na case , é a quebra de linha
const substring = 'concatenado'
const string4 = `${string3} e ${substring} com este texto!!! `
//seia o mesmo que o codigo abaixo
//const string4 = string3 + " e " + substring + "com este texto!!!"
console.log(string4)

console.log('\n\n\n------------------------------------------\n\n\n')

console.log('numbers')

//exisem 4 fomas de declarar numeros
//existem os negotivos flutuantes,posiivos futuantes, negaivos e posiivos
// negativos com pontos flutuanes(casas dcimais)
const number1 = -1.17

//posiivos com pontos flutuanes

const number2 = 1.185

//negativos inteiros
const number3 = -1

// positivos inteiros
const number4 = 2

console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)

console.log('\n\n\n------------------------------------------\n\n\n')
console.log('boleans')
//boleanos são variaveis de condições (tue , false)
//
//eles são criados com valores boleanos ou podem receber seu valores dinamicamente de uma
//comparação enr valores condições

const boleano1 = true
const boleano2 = false
const boleano3 = 1 > 10 //veriicando se 1 é maior que 10
const boleano4 = 1 < 10 //verificando se 1 é menor que 10
const boleano5 = string1 === 'text' // verificando se o valo de string é igual  à string
const boleano6 = '1' == 1 // veificado se o valoré igual (true)
const boleano7 = '1'=== 1 // verificando se o valor e ipo sao iguais ( false, pois o valor 1 é diferente da string 1)
const boleano8 = 1 === 1 // verificando se valor e tipo são iguais( true , pois volores e tipos são iguais)
const boleano9 = string1.includes('aspas') // verificando se há palavra aspas dento da variavel.

console.log('boleano1',boleano1)
console.log('boleano2',boleano2)
console.log('boleano3',boleano3)
console.log('boleano4',boleano4)
console.log('boleano5',boleano5)
console.log('boleano6',boleano6)
console.log('boleano7',boleano7)
console.log('boleano8',boleano8)
console.log('boleano9',boleano9)


console.log('\n\n\n------------------------------------------\n\n\n')

console.log('arays')
// um array ou pilha de alguma linguagem, nada mais é que um grupo de dados oganizados em sequncia.
//ele pode ser criado de duas formas

// aray de strings de [], neste caso separamos cada item aravez de uma virgula",".
const array1 = ['eu','tu','ele']
// arrays de string atravez de um inicialuzação, neste caso utizamos o
//new Array () e separamos por virgula "," dento de pareneses "()"
const array2 = new Array('eu','tu','ele')

console.log('array1',array1)
console.log('array2',array2)

// um array pode ser acessado aavez da posição doitem na ilha (index)
// nos colocamos o [] e informams dentr dele a posião começando em '0'

const primeiroIemNoArray1 = array1[0] // 'eu'
const segundoIemNoArray1 = array1[1] // 'tu'
const terceiroIemNoArray1 = array1[2] // 'ele'


const primeiroIemNoArray2 = array2[0] // 'eu'
const segundoIemNoArray2 = array2[1] // 'tu'
const terceiroIemNoArray2 = array2[2] // 'ele'


console.log('primeiroIemNoArray1',primeiroIemNoArray1)
console.log('segundoIemNoArray1',segundoIemNoArray1)
console.log('terceiroIemNoArray1',terceiroIemNoArray1)

console.log('primeiroIemNoArray2',primeiroIemNoArray2)
console.log('segundoIemNoArray2',segundoIemNoArray2)
console.log('terceiroIemNoArray2',terceiroIemNoArray2)

console.log('\n\n\n------------------------------------------\n\n\n')

console.log('JSON - JAVASCRIPT OBJECT NOTAION')

//criando um objeto já com dados

const user ={
  name: 'felipe',
  age: 26 ,
}

//mas ainda podemos  atribuir valo posteriormente
user.lastname = 'Ribeiro'
//o objeto é mutavel , então podemos criar/altera/deletar propriedades e valores
user.lasname = 'o ribeio'
user.age = user.age + 27
console.log('user', user)

//criando um objeto json vazio e atribuindo valores posteriormene
const user2 = {}
user2.name = 'felipe'
user2.age = 26
user2.lastname = 'Ribeiro'
console.log('user2' , user2)

// criando um objeo vazio atavez da classe "Object"

const user3 = new Object()
user3.name = 'felipe'
user3.age = 26
user3.lastname = 'Ribeiro'
console.log('user3' , user3)

//o valor do user 1 coninua o mesmo pois nada tem a ver com as outras coisas
console.log('user', user)

// podemos pegar o valor de uma propriedade e atribuir em uma variavel
const nameFrowUser = user.name
console.log('nameFromUser' , nameFrowUser)






