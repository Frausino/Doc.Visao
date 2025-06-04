const formPaciente = document.getElementById('formPaciente');
const formHorario = document.getElementById('formHorario');
const outputRelatorio = document.getElementById('outputRelatorio');

const pacientes = [];
const agendamentos = [];

formPaciente.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nomePaciente').value;
  const documento = document.getElementById('documentoPaciente').value;
  const especialidade = document.getElementById('especialidadeDesejada').value;

  pacientes.push({ nome, documento, especialidade });
  alert(`Paciente ${nome} cadastrado com sucesso.`);
  formPaciente.reset();
});

formHorario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('pacienteHorario').value;
  const data = document.getElementById('dataHorario').value;
  const hora = document.getElementById('horaHorario').value;

  agendamentos.push({ nome, data, hora });
  alert(`Consulta para ${nome} agendada: ${data} às ${hora}`);
  formHorario.reset();
});

function gerarRelatorio() {
  let relatorio = "--- PACIENTES CADASTRADOS ---\n";
  pacientes.forEach((p, i) => {
    relatorio += `${i + 1}. ${p.nome} - ${p.especialidade} (Doc: ${p.documento})\n`;
  });

  relatorio += "\n--- CONSULTAS AGENDADAS ---\n";
  agendamentos.forEach((a, i) => {
    relatorio += `${i + 1}. ${a.nome} - ${a.data} às ${a.hora}\n`;
  });

  outputRelatorio.textContent = relatorio;
}
