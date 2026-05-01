const numeroConta = 123 //const significa que o valor não pode ser alterado, ou seja, é uma constante. Se fosse let, poderia ser alterado posteriormente.
let titular = "Amanda"
let saldo = 10000
let contaAtiva = false
let statusConta

if(contaAtiva === true) { // pode relacionar ao saldo também(saldo>=1000.00)
    statusConta = "Ativa"
} else {
    statusConta = "Bloqueada"
}

console.log("===== BANCO INOVABANK =====")
console.log("Número da Conta:", numeroConta) // outra opção - console.log(`conta:${numeroConta}`)
console.log("Titular:", titular) //console.log(`Titular:${titular}`)
console.log("Saldo:", saldo) //console.log(`Saldo:${saldo}`)
console.log(`saldo: R$ ${saldo.toFixed(2)}`) //toFixed(2) para mostrar o valor com 2 casas decimais 
console.log("Status:", statusConta) //console.log(`Status:${statusConta}`)

function depositar(valor) {
    if(!contaAtiva) { //verificando se a conta está bloqueada antes de permitir o depósito. Se a conta não estiver ativa, o console exibirá uma mensagem informando que a conta está bloqueada e a operação será negada.
        console.log("\nA conta está bloqueada. Operação Negada.")
        return //retorna para sair da função, impedindo que o código abaixo seja executado.
    }
   else if(valor > 0) { //verificando se o valor é maior que zero e se a conta está ativa antes de permitir o depósito.
        saldo = saldo + valor 
        console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
    console.log("\nValor inválido para depósito. \nO valor deve ser maior que zero.")
    } 
}  

// usar \n para quebrar linha e && para "e" em uma mesma condição, por exemplo: if(valor > 0 && valor <= 10000) { ... }
    


depositar(500) //chamando a função para depositar um valor, nesse caso, 500. O saldo será atualizado e exibido no console.  
depositar(-100) //chamando a função para depositar um valor inválido, nesse caso, -100. O console exibirá uma mensagem de erro informando que o valor é inválido.

function sacar(valor) {
    if(!contaAtiva) { //verificando se a conta está bloqueada antes de permitir o saque. Se a conta não estiver ativa, o console exibirá uma mensagem informando que a conta está bloqueada e a operação será negada.
        console.log("\nA conta está bloqueada. Operação Negada.")
     return //retorna para sair da função, impedindo que o código abaixo seja executado.
    }else if(valor > 0 && valor <= saldo) { //verificando se o valor é maior que zero, menor ou igual ao saldo disponível e se a conta está ativa antes de permitir o saque.
        saldo = saldo - valor // pode ser reescrito como saldo -= valor que é uma forma mais concisa de atualizar o saldo subtraindo o valor do saque.
        console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("\nValor inválido para saque. \nO valor deve ser maior que zero e menor ou igual ao saldo disponível.")
    }
    
}

sacar(200) 

function verExtrato() {
    if (contaAtiva) {
        statusConta = "Ativa";
    } else {
        statusConta = "Bloqueada";
    }
    console.log("\n===== EXTRATO DA CONTA =====")
    console.log("Número da Conta:", numeroConta)
    console.log("Titular:", titular)
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log("Status:", statusConta)
}

verExtrato() //chamando a função para exibir o extrato da conta. O console exibirá as informações da conta, incluindo o número da conta, titular, saldo e status.

verExtrato()
depositar(500)
depositar(-200)
sacar(100)
sacar(20000)
verExtrato() //chamando a função para exibir o extrato da conta novamente, após realizar algumas operações de depósito e saque. O console exibirá as informações atualizadas da conta, refletindo as transações realizadas.

function bloquearConta() {
    contaAtiva = false
    statusConta = "Conta Bloqueada"
    console.log("\nA conta foi bloqueada com sucesso!")
}

bloquearConta() //chamando a função para bloquear a conta. O console exibirá uma mensagem informando que a conta foi bloqueada com sucesso. A variável contaAtiva será atualizada para false e o status da conta será alterado para "Conta Bloqueada".

depositar(100) //tentando realizar um depósito após a conta ter sido bloqueada. O console exibirá uma mensagem de erro informando que o valor é inválido para depósito, pois a conta está bloqueada.
sacar(300) //tentando realizar um saque após a conta ter sido bloqueada. O console exibirá uma mensagem de erro informando que o valor é inválido para saque, pois a conta está bloqueada.