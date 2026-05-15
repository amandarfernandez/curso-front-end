let tabuleiro = [];
let naviosRestantes = 3;
let tentativas = 0;
let jogoAtivo = true;

const elTabuleiro = document.querySelector("#tabuleiro");
const elMensagem = document.querySelector("#mensagem");
const elTentativas = document.querySelector("#tentativas");
const btnReiniciar = document.querySelector("#btn-reiniciar");

function criarTabuleiro() {
  for (let i = 0; i < 5; i++) {
    const linha = []; //linha que é um array vazio
    for (let j = 0; j < 5; j++) {
      linha.push(0); //adiciona o valor 0 na linha
    }

    tabuleiro.push(linha); //adiciona a linha no tabuleiro
  }
}

function posicionarNavios() {
  naviosRestantes = 3;
  tabuleiro[1][2] = 1;
  tabuleiro[1][4] = 1;
  tabuleiro[3][0] = 1;
}

function atirar(lin, col) {
  const pos = tabuleiro[lin][col]; //chama a função da posição do tabuleiro

  // para dizer ou na condicional no js usa-se a ||

  if (pos === 2 || pos === 3) return console.log("Posição já atingida!"); //sem chaves pq é um if de condição/instrução única

  if (pos === 1) {
    tabuleiro[lin][col] = 2;
    naviosRestantes--;
    tentativas++;
    console.log("Acerto!");
  }
  if (pos === 0) {
    tabuleiro[lin][col] = 3;
    tentativas++;
    console.log("Água!");
  }

  if (naviosRestantes === 0) console.log("Você venceu!");
}

function renderizarTabuleiro() {
  elTabuleiro.innerHTML = "";

  for (let linha = 0; linha < tabuleiro.length; linha++) {
    for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++) {
      const celula = document.createElement("div");
      const valor = tabuleiro[linha][coluna];

      celula.dataset.linha = linha;
      celula.dataset.coluna = coluna;

      if (valor === 2) {
        celula.classList.add("acerto");
      } else if (valor === 3) {
        celula.classList.add("erro");
      }

      celula.addEventListener("click", function () {
        if (!jogoAtivo) return;

        const l = Number(celula.dataset.linha);
        const c = Number(celula.dataset.coluna);

        atirar(l, c);
        renderizarTabuleiro();
      });

      elTabuleiro.appendChild(celula);
    }
  }
}

function iniciarJogo() {
  tabuleiro = [];
  criarTabuleiro();
  posicionarNavios();
  tentativas = 0; // também importante
  jogoAtivo = true;

  elMensagem.textContent = "Clique em uma celula para atirar";
  elTentativas.textContent = "Tentativas : 0";

  renderizarTabuleiro();
}

btnReiniciar.addEventListener("click", function () {
  // Chame iniciarJogo() aqui
});



// ------------------------------------------------------------
// INICIO DO JOGO
// ------------------------------------------------------------
// Esta linha inicia o jogo quando a página carrega.
// Nao altere.

iniciarJogo();

// ============================================================
// DESAFIO EXTRA — Navios aleatorios
// ============================================================
//
// Se terminar antes do fim da aula, crie uma nova versao
// de posicionarNavios que usa Math.random() para sortear
// as posições em vez de usá-las fixas.
//
// Math.random() gera um decimal entre 0 e 1.
// Math.floor(Math.random() * 5) gera um inteiro entre 0 e 4.
//
// A nova funcao deve:
//   - Receber o tabuleiro e a quantidade de navios
//   - Sortear linha e coluna aleatórias
//   - Verificar se a posição já tem navio antes de marcar
//   - Repetir até posicionar todos os navios sem sobreposição
//
// Chame posicionarNaviosAleatorio(tabuleiro, 3) dentro de
// iniciarJogo() no lugar de posicionarNavios().
// ============================================================

function posicionarNaviosAleatorio(tabuleiro, quantidade) {}
