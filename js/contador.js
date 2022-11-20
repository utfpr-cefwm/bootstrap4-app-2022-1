// Capturar referências para os dois botões:
const botaoMais =  document.querySelector('#incrementar');
const botaoMenos = document.querySelector('#decrementar');

botaoMais.addEventListener('click', () => {
  alteraValor(+1);
});
botaoMenos.addEventListener('click', function() {
  alteraValor(-1);
});

// Capturar referência para o <output>:
const output = document.querySelector('output');

let contagem = 0;

// dif = 1  se eu clicar no botão verde
// dif = -1 se eu clicar no botão vermelho
function alteraValor(dif) {

  contagem = contagem + dif;

  // Exibir a nova contagem no <output>:
  output.innerHTML = contagem;

  // Adicionar ou remover classes Bootstrap no <output>
  if (contagem > 0) {
    output.classList.add('text-success');
  } else if (contagem < 0) {
    output.classList.add('text-danger');
  } else {
    output.classList.remove('text-success');
    output.classList.remove('text-danger');
  }

}
