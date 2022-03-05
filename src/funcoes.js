// function - função
//
// é um algoritimo que criamos para predeterminar uma tarefa que deve ser
// isolada onde podemos executar diversas vezes em diversos lugares.
//
// uma função permite isolar um contexto e criarmos variaveis que somente
// existirão dentro da função, por isto uma função nunca vai criar variaveis
// para acessar de fora dela mas a mesma permite retornar um dado e assim
// termos acesso de fora dela
//
// uma função tambem pode receber parametros a fim de mudar o dado a ser processado
// ou até mesmo mudar o seu comportamento com base nestes valores recebidos
//
// para criar uma função nos utilizamos a palavra reservada "function"
// seguido do nome que daremos a função "minhaFuncao" (a mesma não pode possuir caracteres especiais)
// após colocarmos o nome devemos passar os "()" (sem argumentos simplesmente colocamos "()")
// com argumentos (parametros que a função vai utilizar para processar) "(parametros1, parametros2)"
// (não tem limites) de parametros que podemos passar e na sequencia passamos
// as chaves que vai ser o corpo da função "{/* algoritimo aqui */}"
// desta forma teriamos uma função mais ou menos desta forma
//
// sem argumentos/parametros
// function minhaFuncao() {/* algoritimo aqui */}
//
// com argumentos/parametros
// function minhaFuncao(parametros1, parametros2, parametros3) {/* algoritimo aqui */}
//////////////////////////////////////////////////////////////////////////////

// criando uma função que avi executar uma tarefa simples sempre que for chamada

function exibirMensagem() {
  console.log('Exibindo a amensagem')
}

// chamando a mensagem "exibindo a mendagem " 2 vezes

exibirMensagem()
exibirMensagem()

/**
 * criando uma função que executar uma tarea simples sempre que for chamada
 * e recebe um valo para pocessar
 * @param {*} mensagem que vai ser exibida
 */
function exibirMensagemAtravezDeParametro(mensagem) {
  console.log(mensagem)
}

// chamando 3 vezes com valores diferentes

exibirMensagemAtravezDeParametro('hello world')
exibirMensagemAtravezDeParametro(15)
exibirMensagemAtravezDeParametro({ value: 15.55, amount: 22 })

/**
 *
 * @param {number} a um valor numerico
 * @param {number} b um valo numeico
 * @returns {number} retorna a soam dos dois valores
 */
function somar(a, b) {
  return a + b
}

const soma1 = somar(1, 3)
console.log('somar1"somar(1,3)', soma1)
const soma2 = somar(2, 4)
console.log('somar2"somar(2,4)', soma2)
console.log('somar(2,4)', somar(2, 4))
console.log('somar(somar(2,5),10)', somar(somar(2, 5), 10))
