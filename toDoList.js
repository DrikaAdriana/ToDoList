let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('btnAddTarefa');
let listaTarefas = document.querySelector('#listaTarefas');

inputNovaTarefa.addEventListener('keypress', (e) => {

  if(e.keyCode == 13) {
      let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),
      }
      // TODO:: Adicinar a tarefa ao Html
  }

});

btnAddTarefa.addEventListener('click', (e) => {

  let tarefa = {
    nome: inputNovaTarefa.value,
    id: gerarId(),
  }
  
});

function gerrarId() {
  return Math.floor(Math.random() * 3000);
}

function adicionarTarefa (tarefa) {
   
}

