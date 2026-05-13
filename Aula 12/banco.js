const numeroConta = 123; //const significa que o valor não pode ser alterado, ou seja, é uma constante. Se fosse let, poderia ser alterado posteriormente.
let titular = "Amanda";
let saldo = 10000;
let contaAtiva = true;
let statusConta;
let historico = []; //lista vazia que vai guardar as transações

const elsaldo = document.querySelector("#saldo");
const elMensagem = document.querySelector("#mensagem");
const btnDepositar = document.querySelector("#btn-depositar");
const btnSacar = document.querySelector("#btn-sacar");
const btnBloquear = document.querySelector("#btn-bloquear");
const elTotalDepositos = document.querySelector("#total-depositos");
const elTotalSaques = document.querySelector("#total-saques");
const elTotalTransacoes = document.querySelector("#total-transacoes");
const elUltimasTransacoes = document.querySelector("#ultimas-transacoes");

btnDepositar.addEventListener("click", () => {
  const campoValor = document.querySelector("#campo-valor"); //seleciona o elemento do campo de texto onde o usuário digita o valor a ser depositado. O método querySelector é usado para selecionar o elemento com o ID "campo-valor".
  const valor = Number(campoValor.value); //converte o valor do campo de texto para um número usando a função Number(). Isso é necessário porque os valores dos campos de texto são tratados como strings por padrão, e precisamos convertê-los para números para realizar operações matemáticas corretamente.
  //chama a função depositar passando o valor convertido como argumento. Isso permitirá que o valor seja processado corretamente dentro da função depositar, onde serão realizadas as verificações e atualizações necessárias para o depósito.
  depositar(valor);
});

btnSacar.addEventListener("click", () => {
  const campoValor = document.querySelector("#campo-valor"); //seleciona o elemento do campo de texto onde o usuário digita o valor a ser depositado. O método querySelector é usado para selecionar o elemento com o ID "campo-valor".
  const valor = Number(campoValor.value); //converte o valor do campo de texto para um número usando a função Number(). Isso é necessário porque os valores dos campos de texto são tratados como strings por padrão, e precisamos convertê-los para números para realizar operações matemáticas corretamente.
  //chama a função depositar passando o valor convertido como argumento. Isso permitirá que o valor seja processado corretamente dentro da função depositar, onde serão realizadas as verificações e atualizações necessárias para o depósito.
  sacar(valor);
});

btnBloquear.addEventListener("click", bloquearConta);

if (contaAtiva === true) {
  // pode relacionar ao saldo também(saldo>=1000.00)
  statusConta = "Ativa";
} else {
  statusConta = "Bloqueada";
}

function depositar(valor) {
  if (!contaAtiva) {
    //verificando se a conta está bloqueada antes de permitir o depósito. Se a conta não estiver ativa, o console exibirá uma mensagem informando que a conta está bloqueada e a operação será negada.
    console.log("\nA conta está bloqueada. Operação Negada.");
    return; //retorna para sair da função, impedindo que o código abaixo seja executado.
  } else if (valor > 0) {
    //verificando se o valor é maior que zero e se a conta está ativa antes de permitir o depósito.
    saldo = saldo + valor;
    historico.push(`Depósito de R$${valor} | Saldo atual: R$${saldo}`);

    atualizarSaldo(); //chamando a função para atualizar o saldo exibido no console após realizar o depósito. O console exibirá o novo saldo da conta, refletindo o valor do depósito realizado.
    verResumo();
    atualizarHistoricoNaTela();
    exibirMensagem(`Depósito de ${valor} realizado com sucesso!`, "sucesso"); //chamando a função para exibir uma mensagem de sucesso no console, indicando que o depósito foi realizado com sucesso. A mensagem será exibida com a classe CSS 'msg-sucesso' para estilização.
  } else {
    exibirMensagem(
      "Valor inválido para saque. O valor deve ser maior que zero e menor ou igual ao saldo disponível.",
      "erro"
    ); //chamando a função para exibir uma mensagem de erro no console, indicando que o valor é inválido para depósito. A mensagem será exibida com a classe CSS 'msg-erro' para estilização.
  }
}

// usar \n para quebrar linha e && para "e" em uma mesma condição, por exemplo: if(valor > 0 && valor <= 10000) { ... }

function sacar(valor) {
  if (!contaAtiva) {
    //verificando se a conta está bloqueada antes de permitir o saque. Se a conta não estiver ativa, o console exibirá uma mensagem informando que a conta está bloqueada e a operação será negada.

    exibirMensagem("A conta está bloqueada. Operação Negada.", "erro"); //chamando a função para exibir uma mensagem de erro no console, indicando que a conta está bloqueada e a operação de saque foi negada. A mensagem será exibida com a classe CSS 'msg-erro' para estilização.

    return; //retorna para sair da função, impedindo que o código abaixo seja executado.
  } else if (valor > 0 && valor <= saldo) {
    //verificando se o valor é maior que zero, menor ou igual ao saldo disponível e se a conta está ativa antes de permitir o saque.
    saldo = saldo - valor; // pode ser reescrito como saldo -= valor que é uma forma mais concisa de atualizar o saldo subtraindo o valor do saque.
    historico.push(`Saque de R$${valor} | Saldo atual: R$${saldo}`);
    //console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`);

    atualizarSaldo(); //chamando a função para atualizar o saldo exibido no console após realizar o depósito. O console exibirá o novo saldo da conta, refletindo o valor do depósito realizado.
    verResumo();
    atualizarHistoricoNaTela();
    exibirMensagem(`Saque de ${valor} realizado com sucesso!`, "sucesso"); //chamando a função para exibir uma mensagem de sucesso no console, indicando que o depósito foi realizado com sucesso. A mensagem será exibida com a classe CSS 'msg-sucesso' para estilização.
  } else {
    //console.log( "\nValor inválido para saque. \nO valor deve ser maior que zero e menor ou igual ao saldo disponível." );

    exibirMensagem(
      "Valor inválido para saque. O valor deve ser maior que zero e menor ou igual ao saldo disponível.",
      "erro"
    ); //chamando a função para exibir uma mensagem de erro no console, indicando que o valor é inválido para saque. A mensagem será exibida com a classe CSS 'msg-erro' para estilização.
  }
}

function atualizarSaldo() {
  elsaldo.textContent = `Saldo: R$ ${saldo.toFixed(2)}`;
}

function exibirMensagem(texto, tipo) {
  elMensagem.textContent = texto;
  elMensagem.style.display = "block";
  elMensagem.className = tipo === "sucesso" ? "msg-sucesso" : "msg-erro"; //usa a ? para atribuir a classe CSS correta com base no tipo de mensagem (sucesso ou erro).
}

function bloquearConta() {
  if (contaAtiva) {
    contaAtiva = false;
    exibirMensagem("A conta foi bloqueada.", "erro"); //chamando a função para exibir uma mensagem de erro no console, indicando que a conta foi bloqueada. A mensagem será exibida com a classe CSS 'msg-erro' para estilização.
    btnBloquear.textContent = " 🔓 Desbloquear Conta"; //alterando o texto do botão para "Desbloquear Conta" para indicar que a conta está bloqueada e o próximo clique irá desbloqueá-la.
  } else {
    contaAtiva = true;
    exibirMensagem("A conta foi desbloqueada.", "sucesso"); //chamando a função para exibir uma mensagem de sucesso no console, indicando que a conta foi desbloqueada. A mensagem será exibida com a classe CSS 'msg-sucesso' para estilização.
    btnBloquear.textContent = "🔒 Bloquear Conta"; //alterando o texto do botão para "Bloquear Conta" para indicar que a conta está desbloqueada e o próximo clique irá bloqueá-la.
  }
}

function verResumo() {
  let totalDepositos = 0;
  let totalSaques = 0;
  let totalTransações = 0;

  for (const transacao of historico) {
    if (transacao.includes("Depósito")) {
      totalDepositos++;
    } else if (transacao.includes("Saque")) {
      totalSaques++;
    }
    totalTransações++;
  }

  elTotalDepositos.textContent = totalDepositos;
  elTotalSaques.textContent = totalSaques;
  elTotalTransacoes.textContent = totalTransações;
}

function atualizarHistoricoNaTela() {
  if (!elUltimasTransacoes) return;

  const mensagemVazia = document.querySelector(".historico-vazio");

  // Controla a mensagem de vazio
  if (mensagemVazia) {
    mensagemVazia.style.display = historico.length === 0 ? "block" : "none";
  }

  // Pega só as últimas 5 (mais recentes primeiro)
  const ultimas = historico.slice(-5).reverse();

  // Cria os elementos de forma segura
  const itens = ultimas.map(transacao => {
    const li = document.createElement("li");
    li.textContent = transacao;
    return li;
  });

  // Substitui todos os filhos de uma vez (melhor prática)
  elUltimasTransacoes.replaceChildren(...itens);
}
