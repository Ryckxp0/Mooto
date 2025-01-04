// Funcionalidade do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode adicionar uma função para enviar os dados para um servidor ou fazer um alert
    alert(`Mensagem enviada!\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);

    // Limpar os campos após envio
    document.getElementById('form-contato').reset();
});
