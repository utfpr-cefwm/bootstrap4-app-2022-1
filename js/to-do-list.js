// Capturar uma referência para o botão "Adicionar":
const botaoAdicionar = document.querySelector('#adicionar');

botaoAdicionar.addEventListener('click', function() {

  // Capturar a div `.container`:
  const divContainer = document.querySelector('#lista-tarefas');

  // Criar uma nova <div class="row"> em branco:
  const novaRow = document.createElement('div');
  novaRow.classList.add('row');
  novaRow.innerHTML = `
    <div class="col d-flex">
      <input
        type="checkbox"
        class="mr-2"
      />
      <input
        type="text"
        class="flex-grow-1 form-control"
        placeholder="Digite aqui a tarefa..."
      />
      <button
        type="button"
        class="btn btn-danger text-center"
      >
        <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  `;

  // Adicionar essa nova div no `.container`:
  divContainer.appendChild(novaRow);

  const checkbox = novaRow.querySelector('input[type="checkbox"]');
  const caixa = novaRow.querySelector('input[type="text"]');
  checkbox.addEventListener('change', function(event) {
    if (event.target.checked) {
      caixa.disabled = true;
    } else {
      caixa.disabled = false;
    }
  });

  const botao = novaRow.querySelector('button');
  botao.addEventListener('click', function() {
    divContainer.removeChild(novaRow);
  });

});
