const numeroConta = 123 //const significa que o valor não pode ser alterado, ou seja, é uma constante. Se fosse let, poderia ser alterado posteriormente.
let titular = "Amanda"
let saldo = 10000
let contaAtiva = true
let statusConta
let historico = [] //lista vazia que vai guardar as transações

if(contaAtiva === true) { // pode relacionar ao saldo também(saldo>=1000.00)
    statusConta = "Ativa"
} else {
    statusConta = "Bloqueada"
}

console.log("===== BANCO INOVABANK =====")
console.log("Número da Conta:", numeroConta) // outra opção - console.log(`conta:${numeroConta}`)
console.log("Titular:", titular) //console.log(`Titular:${titular}`)
console.log(`saldo: R$ ${saldo.toFixed(2)}`) //toFixed(2) para mostrar o valor com 2 casas decimais 
console.log("Status:", statusConta) //console.log(`Status:${statusConta}`)

function depositar(valor) {
    if(!contaAtiva) { //verificando se a conta está bloqueada antes de permitir o depósito. Se a conta não estiver ativa, o console exibirá uma mensagem informando que a conta está bloqueada e a operação será negada.
        console.log("\nA conta está bloqueada. Operação Negada.")
        return //retorna para sair da função, impedindo que o código abaixo seja executado.
    }
   else if(valor > 0) { //verificando se o valor é maior que zero e se a conta está ativa antes de permitir o depósito.
        saldo = saldo + valor 
        historico.push(`Depósito de R$${valor} | Saldo atual: R$${saldo}`);
        console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
    console.log("\nValor inválido para depósito. \nO valor deve ser maior que zero.")
    } 

}  

// usar \n para quebrar linha e && para "e" em uma mesma condição, por exemplo: if(valor > 0 && valor <= 10000) { ... }
    



function sacar(valor) {
    if(!contaAtiva) { //verificando se a conta está bloqueada antes de permitir o saque. Se a conta não estiver ativa, o console exibirá uma mensagem informando que a conta está bloqueada e a operação será negada.
        console.log("\nA conta está bloqueada. Operação Negada.")
     return //retorna para sair da função, impedindo que o código abaixo seja executado.
    }else if(valor > 0 && valor <= saldo) { //verificando se o valor é maior que zero, menor ou igual ao saldo disponível e se a conta está ativa antes de permitir o saque.
        saldo = saldo - valor // pode ser reescrito como saldo -= valor que é uma forma mais concisa de atualizar o saldo subtraindo o valor do saque.
        historico.push(`Saque de R$${valor} | Saldo atual: R$${saldo}`);
        console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("\nValor inválido para saque. \nO valor deve ser maior que zero e menor ou igual ao saldo disponível.")
    }
}
    


depositar(500) //chamando a função para depositar um valor, nesse caso, 500. O saldo será atualizado e exibido no console.
sacar(200) 
depositar(300)
sacar(20000) //tentando sacar um valor maior do que o saldo disponível. O console exibirá uma mensagem de erro informando que o valor é inválido para saque, pois excede o saldo disponível.
depositar(20)
depositar(120)
sacar(50)
depositar(1000)
depositar(30)

console.log(historico); //imprime o histórico de transações, que agora inclui as transações de depósito e saque realizadas. Cada transação é registrada como uma string na lista historico, mostrando o tipo de transação, o valor e o saldo atual após a transação.;



// Percorre só as últimas 5
for (let i = 1; i < 6; i++) {
  const indiceAtual = historico.length - i;
    console.log(`${[i]}. ${historico[indiceAtual]}`);
}


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

function verExtrato() {
    console.log("══════════════════════════════════");
    console.log("         EXTRATO DA CONTA");
    console.log("══════════════════════════════════");
    console.log(`Conta:   ${numeroConta}`);
    console.log(`Titular: ${titular}`);
    console.log("──────────────────────────────────");
if (historico.length === 0) {
    console.log("Nenhuma transação realizada.");
  } else {
    // Últimas 5 transações
    let ultimas = historico.slice(-5);
    for (let i = 0; i < ultimas.length; i++) {
      console.log(`${i + 1}. ${ultimas[i]}`);
    }
  }
}

  console.log("──────────────────────────────────");
  console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);


// Testando
depositar(500);
sacar(200);
depositar(300);

verExtrato();



function verResumo() {
    let nDepositos = 0
    let nSaques = 0
    let qtdTransacoes = 0
  
    
    for (let i = 0; i < historico.length ; i++) {
      if (historico[i].startsWith("Depósito")) {
        nDepositos++;
      } else {
        nSaques++;
      }
qtdTransacoes++;
    }
  
    console.log("\nRESUMO DA CONTA");
    console.log("──────────────────────────────────");
    console.log(`Depósitos: ${nDepositos}`);
    console.log(`Saques: ${nSaques}`);
    console.log(`Transações totais: ${qtdTransacoes} transações`);
  }

verResumo()


function simularTentativassaque
(valor, maxTentativas){
    let tentativas = 0
    while(tentativas < maxTentativas) {
        console.log(`Tentativa ${tentativas + 1} de ${maxTentativas}: Tentando sacar R$ ${valor.toFixed(2)}...`)
        if(valor <= saldo) {
            console.log("Saque realizado com sucesso!")
            break
        } else {
            console.log("Saldo insuficiente para saque.")
        }
        tentativas++
    }
    if(tentativas === maxTentativas) {
        console.log("Número máximo de tentativas atingido. Operação negada.")
    }
}