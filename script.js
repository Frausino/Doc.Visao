// script.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const inputs = this.querySelectorAll('input');
  const emailCpf = inputs[0].value;
  const senha = inputs[1].value;

  if (emailCpf && senha) {
    console.log('Login simulado com sucesso para:', emailCpf);
    alert('Login realizado com sucesso! (Simulado)');
    window.location.href = 'Tela_Cadastro/registro.html'; // redireciona após sucesso
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});

document.querySelector('.google-login').addEventListener('click', function() {
  alert('Login com Google (fake) clicado. Em breve!');
});
