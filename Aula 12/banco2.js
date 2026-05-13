//codigo pronto do professor

const numeroConta = 1;
let titular = 'Amanda';
let saldo = 10000;
let contaAtiva = true;
let statusConta;
let historico = [];
let activeSession = true;

const elSaldo = document.querySelector('#saldo')
const elMensagem = document.querySelector('#mensagem')
const btnDepositar = document.querySelector('#btn-depositar')
const btnSacar = document.querySelector('#btn-sacar')
const campValor = document.querySelector('#campo-valor')
const btnBloquear = document.querySelector('#btn-bloquear')
const elTotalDepositos = document.querySelector('#total-depositos')
const elTotalSaques = document.querySelector('#total-saques')
const elTotalTransacoes = document.querySelector('#total-transacoes')
const elListaHistorico = document.querySelector('#lista-historico')
const btnLimparHistorico = document.querySelector('#btn-limpar-historico')
const campoTitular = document.querySelector('#campo-titular')
const elTitular = document.querySelector('#titular')
const btnEditarTitular = document.querySelector('#btn-editar-titular')

btnEditarTitular.addEventListener('click', () => {
  // cria o input
  const input = document.createElement('input');
  input.type = 'text';
  input.value = '';

  // substitui o botão pelo input
  btnEditarTitular.replaceWith(input);

  input.focus();

  // quando sair do input
  input.addEventListener('blur', () => {
    if (input.value.trim() !== '') {
      titular = input.value;
      elTitular.textContent = titular;
    }

    // recria o botão
    const novoBotao = document.createElement('button');
    novoBotao.id = 'btn-editar-titular';
    novoBotao.textContent = '✏️ Alterar titular';

    // substitui o input pelo botão de novo
    input.replaceWith(novoBotao);

    // reativa o clique
    
novoBotao.textContent = '✏️ Alterar titular';
novoBotao.style.display = 'block';
novoBotao.style.margin = '10px auto';



btnDepositar.addEventListener('click', () => {
  const valor = Number(campValor.value)
  depositar(valor)
})

btnSacar.addEventListener('click', () => {
  const valor = Number(campValor.value)
  sacar(valor)
})

btnBloquear.addEventListener('click', bloquearConta)

function atualizarExtrato(transacao) {

  historico.push(transacao)
  const elListaVazia = document.querySelector('.historico-vazio')
  if (elListaVazia) elListaVazia.remove()

  const item = document.createElement('li')
  item.textContent = transacao
  elListaHistorico.insertBefore(item, elListaHistorico.firstChild)

  while (elListaHistorico.children.length > 5) {
    elListaHistorico.removeChild(elListaHistorico.lastChild)
  }

}


  /* for (let i = 1; i < 6; i++) {
    const item = historico[historico.length - i];
    // console.log(item);
  } */


function depositar(valor) {
  if (!contaAtiva) {
    exibirMensagem('\nNão é possível realizar depósitos em uma conta bloqueada.');
    return;
  } else if (valor > 0) {
    saldo += valor;
    //historico.push(transacao);
    atualizarExtrato(`Depósito: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`);
    atualizarSaldo()
      verResumo()
    exibirMensagem(`Depósito de ${valor} realizado com sucesso!`, 'sucesso');
  } else {
    exibirMensagem(
      '\nValor de depósito inválido. O valor deve ser maior que zero.',
    );
  }
}

function sacar(valor) {
  if (!contaAtiva) {
    exibirMensagem('\nNão é possível realizar saques em uma conta bloqueada.');
    return;
  } else if (valor > 0 && valor <= saldo && contaAtiva) {
    saldo -= valor;
    //historico.push(transacao);
    atualizarExtrato(`Saque: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`);
    atualizarSaldo()
    verResumo()
    exibirMensagem(`Saque de ${valor} realizado com sucesso!`, 'sucesso')
  } else {
    exibirMensagem('\nValor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.')
  }
}

function bloquearConta() {
  const elStatusConta = document.querySelector('#status-conta')

  if (contaAtiva) {
    contaAtiva = false
    exibirMensagem('\nConta bloqueada com sucesso!', 'sucesso');
    btnBloquear.textContent = '🔓 Desbloquear Conta'
    elStatusConta.textContent = 'Bloqueada'
    elStatusConta.className = 'status-bloqueada'
  } else {
    contaAtiva = true
    exibirMensagem('\nConta desbloqueada com sucesso!', 'sucesso');
    btnBloquear.textContent = '🔒 Bloquear Conta'
    elStatusConta.textContent = 'Ativa'
    elStatusConta.className = 'status-ativa'
  }
}

function verResumo() {
  let totalDepositos = 0;
  let totalSaques = 0;
  let totalTransacoes = 0;

  for (const transacao of historico) {
    if (transacao.includes('Depósito')) {
      totalDepositos++;
    } else if (transacao.includes('Saque')) {
      totalSaques++;
    }
    totalTransacoes++;
  }

  elTotalDepositos.textContent = totalDepositos
  elTotalSaques.textContent = totalSaques
  elTotalTransacoes.textContent = totalTransacoes

}

function simularTentativasSaque(valor, maxTentativas = 5) {
  let tentativas = 0;
  while (tentativas < maxTentativas && valor > saldo) {
    console.log(`Tentativa ${tentativas + 1}: R$ ${valor.toFixed(2)} - saldo insuficiente`);
    valor = valor * 0.8 // Reduz o valor da tentativa em 20% a cada tentativa
    tentativas++;
  }

  if (tentativas === maxTentativas) {
    console.log(`\nTentativas esgotadas. Saque não realizado.`);
  } else {
    sacar(valor);
  }
}

// Simulando operações aleatórias
function simularOperacoes(n) {
  let nOperacoes = 0
  while (nOperacoes < n) {
    const rndSelect = Math.floor(Math.random() * 2); // Gera um número aleatório entre 0 e 1
    const valorOperacao = Math.floor(Math.random() * 500) + 1; // Gera um valor aleatório entre 1 e 500
    if (rndSelect === 0) {
      depositar(valorOperacao);
    } else {
      sacar(valorOperacao);
    }
    nOperacoes++;
  }
}

function atualizarSaldo() {
  elSaldo.textContent = `R$ ${saldo.toFixed(2)}`
  if (saldo > 5000) {
    elSaldo.style.color = 'green';
  } else if (saldo <= 1000) {
    elSaldo.style.color = 'red';
  } else {
    elSaldo.style.color = 'yellow';
  }
}

function exibirMensagem(texto, tipo) {
  elMensagem.textContent = texto
  elMensagem.style.display = 'block'
  elMensagem.className = tipo === 'sucesso' ? 'msg-sucesso' : 'msg-erro'
}

function atualizarExtrato(transacao) {
  historico.push(transacao)
  const elListaVazia = document.querySelector('.historico-vazio')
  if (elListaVazia) elListaVazia.remove()

  const item = document.createElement('li')
  item.textContent = transacao
  elListaHistorico.insertBefore(item, elListaHistorico.firstChild)

  while (elListaHistorico.children.length > 5) {
    elListaHistorico.removeChild(elListaHistorico.lastChild)
  }
}

function limparHistorico() {
  historico = []
  elListaHistorico.innerHTML = '<li class="historico-vazio">Nenhuma transação realizada.</li>'
}
btnLimparHistorico.addEventListener('click', limparHistorico)
