

const formPaciente = document.getElementById('formPaciente');

formPaciente.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nomePaciente').value;
  const documento = document.getElementById('documentoPaciente').value;
  const especialidade = document.getElementById('especialidadeDesejada').value;

  if (nome && documento && especialidade) {
    alert('Paciente registrado com sucesso!');
    window.location.href = '../Tela_Agendamento/agendamento.html';
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});