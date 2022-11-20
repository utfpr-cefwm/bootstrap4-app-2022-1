// Capturar referências para os dois botões:
const botaoIniciar =  document.querySelector('#iniciar');
const botaoPausar =  document.querySelector('#pausar');
const botaoParar =  document.querySelector('#parar');

botaoIniciar.addEventListener('click', () => alteraEstado('INICIAR'));
botaoPausar.addEventListener('click',  () => alteraEstado('PAUSAR'));
botaoParar.addEventListener('click',   () => alteraEstado('PARAR'));

// Capturar referência para o <output>:
const output = document.querySelector('output');

let contagem = 0;
let estado = 'PARADO';

/**
 * Computa o novo estado da aplicação baseado na ação especificada.
 *
 * @param acao INICIAR ou PAUSAR ou PARAR.
 */
function alteraEstado(acao) {
  switch (estado) {

    case 'PARADO':
      switch (acao) {
        case 'INICIAR':
          estado = 'RODANDO';
          break;
        case 'PARAR':
          estado = 'PARADO'; // opcional, pois estado inicial = estado final
          contagem = 0;
          break;
      }
      break;

    case 'RODANDO':
      switch (acao) {
        case 'PAUSAR':
          estado = 'PARADO';
          break;
        case 'PARAR':
          estado = 'PARADO';
          contagem = 0;
          break;
      }
      break;

  }
}

/**
 * Atualiza a tela a cada 100 ms com base nas variáveis da memória.
 */
setInterval(
  function() {
    if (estado === 'RODANDO') {
      contagem += 100;
    }
    output.innerHTML = `${(contagem / 1000).toFixed(1)} s`;
  },
  100,
);
