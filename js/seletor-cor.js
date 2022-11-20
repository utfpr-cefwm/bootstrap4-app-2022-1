// Obtém uma referência para o botão desejado:
const botao = document.querySelector('#visualizar');

// Inscreve um handler no evento 'click' do botão:
botao.addEventListener(
  'click',      // Nome do evento no qual vou inscrever...
  function() {  // ... a minha callback function (handler)

    // 1. Ler a cor escolhida pelo usuário:
    const caixa = document.getElementById('cor');
    const cor = caixa.value;

    // 2. Aplicar no `background-color` do body:
    const body = document.querySelector('body');
    body.style.backgroundColor = cor;

    // 3. Exibir mensagem de erro, caso tenha acontecido:
    if (body.style.backgroundColor !== cor) {
      botao.innerHTML = 'Falha!';
      alert('Por gentileza, use cores do CSS!');
    } else {
      botao.innerHTML = 'Sucesso!';
    }

  },
);
