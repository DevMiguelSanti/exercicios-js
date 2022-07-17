// par nome/valor 
const saudacao = 'Opa' // contexto léxico 1 (Local onde a variavel foi definida no código)

function exec () {
    const saudacao = 'Falaaa' //Contexto léxico 2
    return saudacao
  
}

//Objetos são grupos alinhados de pares nome/valores
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)